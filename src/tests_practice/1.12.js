
// const capitalize = (text) => {
//     const firstChar = text[0].toUpperCase();
//     const subStr = text.slice(1);
//     return `${firstChar}${subStr}`
// }

import _ from 'lodash';


export const capitalize = (text) => {
    if (text === '') {
        return '';
    }

    const [firstChar, ...restChars] = text;
    return `${firstChar.toUpperCase()}${restChars.join('')}`
}


export const get = (obj, key, defaultValue) => _.get(obj, key, defaultValue);

export const take = (items, n) => _.take(items, n);