/**
 * get a new string with removed whitespaces
 * @param {string} input
 * @return {string}
 */
export function removeAllWhitespaces(input) {
    let result = input;
    let regEx = /\s+/g;
    result.replace(regEx, '');
    return result;
}

/**
 * get a new string without dashes
 * @param {string} input
 * @return {string}
 */
export function removeAllDashes(input) {
    let result = input;
    let regEx =/\-+/g;
    result.replace(regEx, '');
    return result;
}

/**
 * get a new string without double whitespaces
 * @param {string}input
 * @return {string}
 */
export function replaceAllDoubleWhitespacesWithSpace(input) {
    let result = input;
    let regEx = /\s\s+/g;
    result.replace(regEx, ' ');
    return result;
}