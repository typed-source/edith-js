export function removeAllWhitespaces(input) {
    let result = input;
    let regEx = /\s+/g;
    result.replace(regEx, '');
    return result;
}

export function removeAllDashes(input) {
    let result = input;
    let regEx =/\-+/g;
    result.replace(regEx, '');
    return result;
}

export function replaceAllDoubleWhitespacesWithSpace(input) {
    let result = input;
    let regEx = /\s\s+/g;
    result.replace(regEx, ' ');
    return result;
}