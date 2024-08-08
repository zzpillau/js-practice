import fsp from 'fs/promises';
import path from 'path';
import _ from 'lodash';

const getFilePath = (dirPath, fileName) => path.join(dirPath, fileName);

const getDirectorySize = (dirPath) => {
  const prom = fsp.readdir(dirPath)
    // .then((dirData) => console.log(dirData))
    .then((dirData) => dirData.map((data) => path.join(dirPath, data)))
    // .then((pathes) => console.log(pathes))
    // .then((pathes) => pathes.map((path) => console.log(path)))
    .then((pathes) => Promise.all(pathes.map((path) => fsp.stat(path))))
    .then((stats) => stats.map((stat) => stat.isDirectory() ? 0 : stat.size))
    .then((res) => console.log(_.sumBy(res)));

  const promises = Promise.all([prom]);

  // return promises.then(console.log);
  return promises;
}



getDirectorySize('/home/zzpillau/js-practice/src/asynchronous/__fixtures__/arrays');
// getDirectorySize('/home/zzpillau/js-practice/src/asynchronous/__fixtures__/arrays').then(console.log);
