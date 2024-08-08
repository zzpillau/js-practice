import { access } from 'fs';
import fsp from 'fs/promises'

const filePath = (fileName) => `src/asynchronous/__fixtures__/arrays/${fileName}`;
const touchFile = filePath('touch2.txt');


const touch = (path) => {
  return fsp.access(path)
  .catch((e) => {
    console.log('something wrong!', e);
    // throw e;
  })
  .then(() => fsp.writeFile(path, ''))
  .catch(console.log())
  .then(() => console.log('touched!'))
  .catch(console.log())


  
  // fsp.writeFile(path, '')
  // .then(() => console.log('touched!'))
    // .then(() => fsp.access(path))
    // .catch((e) => console.log('cannot write', e));
}


touch(touchFile);

// fsp.readFile('src/asynchronous/__fixtures__/arrays/second.txt', 'utf-8')
//   .then((content) => console.log(content));