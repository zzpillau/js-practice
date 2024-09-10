import fs from 'fs';

const f = () => console.log('hi!');

const foo = (message) => console.log(message);


setTimeout(f, 1000)

const id1 = setInterval(f, 2000);
setTimeout(() => clearInterval(id1), 8000);

setTimeout(foo.bind(null, 'ho-ho-ho'), 1000)

const watch = (filepath, timeout, cb) => {
  const now = Date.now();

  const timerid = setInterval(() =>
    {
      let lastchange = 0;
    fs.stat(filepath, (err, stats) => {
    const changedetect = stats.mtimeMs - now;
    if (lastchange < changedetect) {
        cb(err )
    }
    lastchange = changedetect;
    })}, timeout);
    
    return timerid;
}

const filepath = '/home/zzpillau/js-practice/src/asynchronous/watcherFile.txt';

const id3 = watch(filepath, 500, (err) => {
    console.log('Wow!');
  });
  
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
  setTimeout(() => clearInterval(id3), 5000); // остановить отслеживание через 5 секунд =import path from 'path';
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
 