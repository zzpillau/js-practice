import _ from 'lodash';
import path from 'path';
import fsp from 'fs/promises';

const pathToFixtures = '/home/zzpillau/js-practice/src/asynchronous/__fixtures__'

const getPath = (fix) => (others) => path.join(fix, others);

const pathToFile = getPath(pathToFixtures);


const foo = async (dirPath) => {


  const dirContentList = await fsp.readdir(dirPath);
  const sortedFilelIst = dirContentList.sort((a, b) => a > b ? -1 : 1)
  console.log(sortedFilelIst);
  const filepathes = await Promise.all(dirContentList.map((el, i) => pathToFile(el)));
  console.log(filepathes);
  
  const stats = await Promise.all(filepathes.map((el) => fsp.stat(el)));
  const modes = await Promise.all(stats.map((el) => el.mode))
  console.log(modes);
  
  const zip = await _.zipWith(filepathes, modes, function(a, b){
    return {filepath: a, mode: b}
  })
  
return zip;  

}


foo(pathToFixtures).then(console.log);


//  foo(pathToFixtures)