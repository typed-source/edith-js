import * as elements from "./src/dom";
import * as bankHelper from "./src/banking";
import * as stringHelper from "./src/string";

const version = '0.0.5';
const author = 'npm: mtizziani (git-hub: typed-source)';

/**
 * general framework information
 * @type {{author: string, version: string}}
 */
export const info = {
    version: version,
    author: author
};

/**
 *
 * @type {{input: {list: {byName: ((function(*): NodeListOf<Element>)|*)}, element: {byName: ((function(string): Element)|*)}}}}
 */
export const dom = {
    input: {
        element: {
            byName: elements.inputByName,
        },
        list: {
            byName: elements.inputListByName,
            byType: elements.inputListByType,
        },
        radio: {
            checked: {
                byName: elements.radioCheckedByName
            },
            list: {
                byName: elements.radioGroupByName
            }
        }
    }
};

export const banking = {
    check: {
        isIban: bankHelper.isIbanCode,
        isBic: bankHelper.isBicCode
    }
}

export const string = {
    replace: {
        doubleWhitespacesWithSpace: stringHelper.replaceAllDoubleWhitespacesWithSpace
    },
    remove: {
        whitespaces: stringHelper.removeAllWhitespaces,
        dashes: stringHelper.removeAllDashes
    }
}