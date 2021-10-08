/**
 * returns first input field found with the name
 * @param {string} name
 * @return {Element}
 */
export function inputByName(name){
    return document.querySelector(`input[name=${name}]`);
}

/**
 * returns a list of input fields by name
 * @param name
 * @return {NodeListOf<Element>}
 */
export function inputListByName(name){
    return document.querySelectorAll(`input[name=${name}]`);
}

/**
 * returns a list of input fields by type
 * @param {string} type
 * @return {NodeListOf<Element>}
 */
export function inputListByType(type){
    return document.querySelectorAll(`input[type=${type}]`);
}

/**
 * returns list if name <input type="radio" name="$name"> elements
 * @param {string} name
 * @return {NodeListOf<Element>}
 */
export  function radioGroupByName(name) {
    return document.querySelectorAll(`input[type=radio][name=${name}]`);
}

/**
 * returns selected <input type="radio" name="$name"> element
 * @param {string} name
 * @return {Element}
 */
export function radioCheckedByName(name) {
    return document.querySelector(`input[type=radio][name=${name}]:checked`);
}