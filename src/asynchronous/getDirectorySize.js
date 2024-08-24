import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

const getPathToFile = (dirPath, fileName) => path.join(dirPath, fileName); // path - string

const getDirectorySize = (dirPath, cb) => {
  fs.readdir(dirPath, (err, fileList) => {
    if (err) {
      cb(err);
      return; 
    }
    console.log(fileList);
    

    const pathes = fileList.map((file) => {
      
      return getPathToFile(dirPath, file);
    })

    async.map(pathes, fs.stat, (err, stats) => {
      console.log(stats);
      if (err) {
        cb(err);
        return
      }
        cb(err, _.sumBy(stats.filter((el) => el.isFile()), 'size'))
      })
    })

 
  }



const fixtures = '/home/zzpillau/js-practice/src/asynchronous/__fixtures__/arrays';


getDirectorySize(fixtures, (err, size) => {
    console.log(size);
  });
 