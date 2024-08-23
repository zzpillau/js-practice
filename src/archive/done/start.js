import fs from 'fs';

// console.log(fs.promises.access);

const {promises: fsp} = fs;

// console.log(fsp);






// // const content = fs.readFileSync('src/asynchronous/__fixtures__/arrays/index-copy.txt', 'utf-8');
// // console.log(content);

// // fs.writeFileSync('src/asynchronous/__fixtures__/arrays/myfile-copy.txt', content);

// // const content2 = fs.readFileSync('src/asynchronous/__fixtures__/arrays/myfile-copy.txt', 'utf-8');
// // console.log(content2);

// // const move = (from, to, cb) => {
// //   fs.readFile(from, (err1, data) => {
// //     if (err1) {
// //       console.log('reading file error!');
// //       cb(err1);
// //       return;
// //     }
// //     fs.writeFile(to, (err2) => {
// //       if (err2) {
// //         console.log('writing file error!');
// //         cb(err2);
// //         return;
// //       }
// //       fs.unlink(from, cb);
// //     })
// //   })
// // }


// const filePath = (fileName) => `src/asynchronous/__fixtures__/arrays/${fileName}`;
// const firstFile = filePath('first.txt');
// // console.log(firstFile);


// const promise = fsp.readFile(firstFile, 'utf-8');
// // console.log(promise);

// fsp.readFile(firstFile, 'utf-8')
//   // .then((content) => console.log(content))
//   .then((content) => fsp.writeFile(filePath('newNewFile.txt'), content))
//   // .then(console.log);


// export const reverse = (path) => {
//   return fsp.readFile(path, 'utf-8')
//     .then((content) => {
//       console.log(content);
//       const reversedContent = content.split('\n').reverse().join('\n');
//       console.log(reversedContent);
//       return fsp.writeFile(path, reversedContent)
//     })
// }
  

// reverse(firstFile);



const promise = fsp.readFile('unknownfile')
  .catch(console.log)
  .then(() => fsp.readFile('anotherUnknownFile'))
  .catch(console.log);

// const state = {
//   count: 0,
//   results: [],
// }

// const tryWriteNewFile = () => {
//   if (state.count !== 2) {
//     return;
//   }

//   fs.writeFile(filePath('anotherNewFile.txt'), state.results.join(''), (error) => {
//   if (error) {
//     console.log('writeFile error!');
//     return;
//   }
//     console.log('finished!');
//   });
// };

// console.log('first reading was started!');
// fs.readFile(firstFile, 'utf-8', (err1, data1) => {
//   console.log('first callback');

//   if (err1) {
//     console.log('first reading error!');
//     return;
//   }
//   state.count += 1;
//   state.results[0] = data1;
//   tryWriteNewFile();
// })

// console.log('second reading was started!');
// fs.readFile(filePath('second.txt'), 'utf-8', (err2, data2) => {
//   console.log('second callback');

//   if (err2) {
//     console.log('second reading error!');
//     return;
//   }
//   state.count += 1;
//   state.results[1] = data2;
//   tryWriteNewFile();
// })


