/**
 * Check if fetch api supported
 */
export const hasFetch = (): boolean => {
    return !!(window.fetch);
}

/**
 * Call API via XHR 
 * @param method request method (POST, GET, PUT, ....)
 * @param url resource location
 */
export const callXHR = (method: string, url: string): Promise<XMLHttpRequest> => {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

/**
 * @todo implement
 */
export const isCORSEnabled = (): Promise<boolean> => {
    return callXHR(
        "get",
        "https://enable-cors.org/"
    ).then(r => true)
}


/**
 * Check if the user agent contains a key. This is the best way we know of
 * right now to detect platforms. If there is a better way, please send a
 * PR.
 *
 * @param {string} key
 * @return {boolean}
 */
export const userAgentContains = (key: string) => {
    const userAgent = navigator.userAgent || '';
    return userAgent.includes(key);
}