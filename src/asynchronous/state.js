import { map } from 'async';
import fs from 'fs';

// const state = {
//   count: 0,
//   results: [],
// }

// const tryWriteNewFile = () => {
//   if (state.count !==2) {
//     return;
//   }

//   fs.writeFile('src/asynchronous/newFile.txt', state.results.join(' '), (error) => {
//     if (error) {
//       return;
//     }
//     console.log('finished!');
//   })
// }

//   console.log('first reading was started');
//   fs.readFile('src/asynchronous/index.txt', (error1, data1) => {
//     console.log('first callback');
//     if (error1) {
//       return;
//     }
//     state.count += 1;
//     state.results[0] = data1; 
//     tryWriteNewFile();
//   });
  
//   console.log('second reading was started');
//   fs.readFile('src/asynchronous/index-copy.txt', (error2, data2) => {
//     console.log('second callback');
//     if (error2) {
//       return;
//     }
//     state.count += 1;
//     state.results[1] = data2;
//     tryWriteNewFile();
//   });


map(['src/asynchronous/index.txt', 'src/asynchronous/index-copy.txt'], fs.readFile, (error1, results) => {
  if (error1) {
    return;
  }
  fs.writeFile('src/asynchronous/newFile.txt', results.join(' '), (error2) => {
    if (error2) {
      return;
    }
    console.log('finished!');
  })
})



