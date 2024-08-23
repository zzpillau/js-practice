import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

const getPath = (dirPath) => path.join('src/asynchronous/__fixtures__', dirPath);
const getFilePath = (dirPath, fileName) => path.join('src/asynchronous/__fixtures__', dirPath, fileName)

const getFileSizeInBytes = (file, callback) => {
  const files = {
    size: 0,
  }
  fs.stat(file, (err, stat) => {
      if (err) {
          return callback(err);
      }
      if (stat.isFile(file)) {
        files.size += stat.size;
      }
      callback(null, files.size)
      
  });
}

getFileSizeInBytes('/home/zzpillau/js-practice/src/asynchronous/__fixtures__/arrays/index.txt')

// const getDirectorySize = (dirName, cb) => {

// const state = {
//   count: 0,
//   results: [],
// }

//   fs.readdir(getPath(dirName), (error, files) => {
//     if (error) {
//       console.log('readdir error');
//       return cb(error);
      
//     }
//     const fileList = files.map((file) => getFilePath(dirName, file));
//     // console.log(fileList);
//     state.results = [...fileList]
//     // console.log(state.results);
    

//     async.map(state.results, getFileSizeInBytes, (errorMap, results) => {
//       if (errorMap) {
//         console.log('mapping error');
//         return cb(errorMap);
        
//       }
//       console.log('results', results);
//       cb(null, _.sumBy(results))
//     })
//   })
// }


// getDirectorySize('arrays', (error, size) => console.log(size));
// src/asynchronous/__fixtures__

// console.log(getFilePath('index.txt', 'arrays'));
// getFileSizeInBytes('src/asynchronous/__fixtures__/arrays/index.txt', (error, stats) => console.log(stats.size));