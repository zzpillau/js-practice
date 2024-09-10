import _ from "lodash";

// const hexToRgb = (colorHex) => {
//     const values = _.chunk([...colorHex.slice(1)], 2).map((item) => parseInt(item.join(''), 16));
//     const result = _.zip(['r', 'g', 'b',], values).reduce((acc, el) => {
//         const [key, value] = el;
//         acc[key] = value;
//         return acc;
//     }, {})
//     return result;
// }

const hexToRgb = (Hex) => {
    const normalizedHexToDesimal = _.chunk([...Hex.slice(1)], 2).map((item) => parseInt(item.join(''), 16));
    let keyIndex = 0;
    const matchedKeyValue = normalizedHexToDesimal.reduce((acc, item) => {
        const keys = ['r', 'g', 'b'];
        acc.push([keys[keyIndex], item]);
        keyIndex += 1;
        return acc;
    }, []);
    const result = matchedKeyValue.reduce((acc, el) => {
        const [key, value] = el;
        acc[key] = value;
        return acc;
    }, {})
    return result;
}

console.log(hexToRgb('#24ab00'));
// { r: 36, g: 171, b: 0 }


const rgbToHex = (r, g, b) => { // 36, 171, 0
    const rgbInArr = [r, g, b];
    const desimaltoHex = rgbInArr.map((item) => (item.toString(16)))
    const normalizedHex = desimaltoHex.map((item) => {
        if (item.length === 1) {
            item = item.padStart(2, '0')
        }
        return item;
    })
    const joinedStr = normalizedHex.join('')
    return joinedStr.padStart(joinedStr.length + 1, '#');

}



console.log(rgbToHex(0, 132, 12)); // '#24ab00'



const [w, q, t] = [[2, 2], [3, 3], [4, 4]];
console.log({w, q, t});
