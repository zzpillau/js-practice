
import _ from 'lodash';

const hexToRgb = (colorHex) => {
    const norm = colorHex.slice(1);
    console.log(norm);
    const arr = [...colorHex.slice(1)];
    console.log(arr);
    const chunked = _.chunk([...colorHex.slice(1)], 2);
    console.log(chunked);
    const map = _.chunk([...colorHex.slice(1)], 2).map((item) => parseInt(item.join(''), 16));
    console.log(map);
    const keys = ['r', 'g', 'b'];
    let keyIndex = 0;
    const one = map.reduce((acc, char) => {
        acc.push([keys[keyIndex], char]);
        keyIndex += 1;
        console.log();
        return acc;
    }, []);
    console.log(one);

    const reduce = one.reduce((acc, el) => {
        const [key, value] = el;
        acc[key] = value;
        return acc;
    }, {})
    return reduce;
}

console.log(hexToRgb('#24ab00'));
