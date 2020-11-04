import { userAgentContains } from "./networking";

const isApple = () => {
    return !!navigator.vendor && navigator.vendor.includes('Apple')
        && !userAgentContains("Tizen");
}

const safariVersion = () => {
    // All iOS browsers and desktop Safari will return true for isApple().
    if (!isApple()) {
        return null;
    }

    // This works for iOS Safari and desktop Safari, which contain something
    // like "Version/13.0" indicating the major Safari or iOS version.
    let match = navigator.userAgent.match(/Version\/(\d+)/);
    if (match) {
        return parseInt(match[1], /* base= */ 10);
    }

    // This works for all other browsers on iOS, which contain something like
    // "OS 13_3" indicating the major & minor iOS version.
    match = navigator.userAgent.match(/OS (\d+)(?:_\d+)?/);
    if (match) {
        return parseInt(match[1], /* base= */ 10);
    }

    return null;
}

const isDRMSupported = () => {
    const basic =
        !!window.MediaKeys &&
        !!window.navigator &&
        !!window.navigator.requestMediaKeySystemAccess &&
        !!window.MediaKeySystemAccess &&
        // eslint-disable-next-line no-restricted-syntax
        !!window.MediaKeySystemAccess.prototype.getConfiguration;

    return basic;
}

const supportsMediaSource = () => {
    if (!window.MediaSource) {
        return false;
    }

    // Some very old MediaSource implementations didn't have isTypeSupported.
    if (!MediaSource.isTypeSupported) {
        return false;
    }

    return true;
}

const supportsMediaType = (mimeType: string) => {
    const video = document.createElement("video");
    return video.canPlayType(mimeType)
}

export function isBrowserSupported() {
    // Basic features needed for the library to be usable.
    const basicSupport = !!window.Promise && !!window.Uint8Array &&
        // eslint-disable-next-line no-restricted-syntax
        !!Array.prototype.forEach;
    if (!basicSupport) {
        return false;
    }

    // We do not support iOS 9, 10, or 11, nor those same versions of desktop
    // Safari.
    const version = safariVersion();
    if (version && version < 12) {
        return false;
    }

    // DRM support is not strictly necessary, but the APIs at least need to be
    // there.  Our no-op DRM polyfill should handle that.
    // TODO(#1017): Consider making even DrmEngine optional.
    const drmSupport = isDRMSupported();
    if (!drmSupport) {
        return false;
    }

    // If we have MediaSource (MSE) support, we should be able to use Shaka.
    if (supportsMediaSource()) {
        return true;
    }

    // If we don't have MSE, we _may_ be able to use Shaka.  Look for native HLS
    // support, and call this platform usable if we have it.
    return supportsMediaType('application/x-mpegurl');
}