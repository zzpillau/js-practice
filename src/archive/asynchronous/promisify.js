import fs from 'fs';

const promisify = (fn) => (...args) => {
  return new Promise ((resolve, reject) => {
    fn(...args, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      data ? resolve(data) : resolve();
    })
  }
  ) 
}
  
const foo = async () => {
    const path = '/home/zzpillau/js-practice/src/asynchronous/__fixtures__/setTimeout.js';
    const readfile = promisify(fs.readFile);
    return await readfile(path, 'utf-8');
} 


foo().then(console.log);



//при вызове функции возвращается промис




// const promisify = () => {
//     const path = '/home/zzpillau/js-practice/src/asynchronous/__fixtures__/setTimeout.js';


//     const newF = () => {
//     return new Promise((resolve, reject) => {

//         fs.readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             // data ? resolve(data) : resolve();
//             resolve(data);
//         })
//     } )  
// }
// return newF();

// }


// promisify().then(console.log);
