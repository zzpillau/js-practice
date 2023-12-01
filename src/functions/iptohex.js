import chunk from 'lodash/chunk.js';

const intToIp = (int) => {
    const ipInHex = int.toString(16).padStart(8, 0);

    console.log(int.toString(16));
    console.log(ipInHex);

    console.log(chunk(ipInHex, 2));

    return chunk(ipInHex, 2)



        .map((octet) => parseInt(octet.join(''), 16))
        .join('.');
};

console.log(intToIp(2149583361)); // '128.32.10.1'
