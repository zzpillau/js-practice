import fs from 'fs';

// const content = fs.readFileSync('src/asynchronous/index.txt', 'utf-8');
// fs.writeFileSync('src/asynchronous/index-copy.txt', content);

// const content2 = fs.readFileSync('src/asynchronous/index-copy.txt', 'utf-8');
// console.log(content);
// console.log(content2);


const callback = (_error, data) => console.log(data);
console.log('before')

fs.readFile('src/asynchronous/index.txt', 'utf-8', callback)
console.log('after')
