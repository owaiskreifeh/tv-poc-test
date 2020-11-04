/**
 * NOTE!! testing with 'in' keyword returns true only if the [key] is present
 *        but wont check if the [value] is a truthy value
 */


/**
 * Test if the browser supports EME
 * @returns {boolean} is EME supported
 */
export const hasEME = (): boolean => {
    const mediaKeys = "MediaKeys" in window || "WebKitMediaKeys" in window || "MSMediaKeys" in window;
    if (mediaKeys) return true;
    return false;
}

/**
 * Test if the browser supports requestMediaKeySystemAccess
 * @returns {boolean} is requestMediaKeySystemAccess supported
 */
export const hasRMKSA = (): boolean => {
    const requestMediaKeySystemAccess = "requestMediaKeySystemAccess" in window.navigator;
    if (requestMediaKeySystemAccess) return true;
    return false;
}


/**
 * Check if the given DRM key is supported
 * @async
 * @param {string} key key domain name
 * @param {Array<object>} mediaConfig A non-empty Array of MediaKeySystemConfiguration objects.
 * @returns {Promise<boolean>} if the key is supported
 */
export const testDRM = async (key: string, mediaConfig: Array<object>): Promise<boolean> => {
    try {
        await navigator.requestMediaKeySystemAccess(key, mediaConfig)
        return true;
    } catch (e) {
        return false
    }
}

