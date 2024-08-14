import fs from 'fs';

const filePath = '/home/zzpillau/js-practice/src/asynchronous/__fixtures__/arrays/neFile.txt';

const retry = (count, fn, finalCallback) => {
  const iter = (foo, calls) => {
    console.log(calls);
    const cb = (err, body) => {
      if (err && calls > 0) {
        iter(foo, calls -= 1);
      } else if (err) {
        finalCallback(count, body);
        return;
      } else {
        finalCallback(null, body);
      }

    }
    fn(cb);
  }
  iter(fn, count);
}



// console.log(filePath);
// console.log(fs.readFileSync(filePath, 'utf-8'));


// const retry = (prevCount, fn, finalCb) => {
//  console.log(prevCount)
//  fn()
//  if (prevCount > 0) { 
//     retry(prevCount -= 1, fn); 
//  } else {
//  }
 
// }

// const retry = (count, fn, finalCb) => {
// if (!fn) {
//   return finalCb()
// } else {
// fn(count)
// }
// }
// //
// retry(3, (a) => console.log(a), (err) => console.log(err))
// retry(3, undefined, (err) => console.log(err))



  retry(3, callback =>
    fs.readFile(filePath, 'utf-8', (err, body) => {
        // console.log(err);
        // console.log(body)
   
      callback(err, body);
    })
    , (err, result) => {
      console.log(result, 'result');
  }
)  