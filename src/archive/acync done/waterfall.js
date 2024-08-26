import fs from 'fs';
import async from 'async';

const filePath = '/home/zzpillau/js-practice/src/asynchronous/__fixtures__/arrays/newFile.txt';
// console.log(fs.readFileSync(filePath, 'utf-8'));
console.log(fs.readFileSync(filePath, 'utf-8'));



const waterfall = (functions, callback) => {
  if (functions.length === 0) {
    return callback();
  }

  const next = ([head, ...rest], prevResult) => {
    const cb = (err, ...args) => {
      if (err) {
        return callback(err, args);
      }
      if (rest.length === 0) {
        callback(err, args);
      } else {
        next(rest, args);
      }
    };
    head(...prevResult, cb)
  };
  next(functions, []);
};


const functions = [
  cb => fs.readFile(filePath, 'utf-8', (err, data) => {
    cb(err, `${data}NewTextWithWaterfall`);
  }),
  (data, cb) => {fs.writeFile(filePath, data, (err) => {
    cb(err);
  })},
];


waterfall(functions, err => {
  if (err) {
    return console.log(err);
  }
});


// async.waterfall(functions, err => {
//   if (err) {
//     return console.log(err);
//   }
// });


const array = [1, 2, 3, 4];
const [head, ...rest] = array;
console.log(head)
console.log(rest)
console.log(...rest);

