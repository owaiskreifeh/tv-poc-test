
/**
 * Insures that the string will always start with a char.
 * @param {string} str string to concat
 * @param {string} char string to test 
 * @returns {string} full string
 */
export const insureStartWith = (str: string, char: string): string => {
    if (!str.startsWith(char)) {
        str = `${char}${str}`;
    }
    return str;
}