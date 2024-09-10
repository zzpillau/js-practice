import fs from 'fs';
import async from 'async';
import { callbackify } from 'util';

const unionFiles = (inputpath1, inputpath2, outputpath, cb) => async.waterfall([
  (callback) => fs.readFile(inputpath1, 'utf-8', (err, data1) => {
    callback(err, data1);
  }),
  (data1, callback) => fs.readFile(inputpath2, 'utf-8', (err, data2) => {
    callback(err, data2,  data1);
  }),
  (data1, data2, callback) => fs.writeFile(outputpath, `${data1}${data2}`, (err) => {
    callback(err);
  }),
], (err) => {
cb(err)
});


const file1 = '/home/zzpillau/js-practice/src/asynchronous/getDirectorySize.js';
const file2 = '/home/zzpillau/js-practice/src/asynchronous/setTimeout.js';
const emptyFile = '/home/zzpillau/js-practice/src/asynchronous/empty.js';

unionFiles(file1, file2, emptyFile, (err)=> console.log(err))