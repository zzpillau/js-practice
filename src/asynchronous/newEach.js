import fs from 'fs';

const noop = (...args) => {console.log('noop is here')};

const once = fn => {
    let called = false;
    return (...args) => {
        if (called) {
            return;
        }
        called = true;
        fn(...args)
    }
}

// const callback = (message) => console.log(message)

// once(callback)('hey1');
// once(callback)('hey2');

// const newCallback = once(callback);

// newCallback('hey!');
// newCallback('hey!');



// const openFiles = [
//   './fixtures/file1',
//   './fixtures/file2',
//   './fixtures/file3',
//   './fixtures/file4',
// ];

// const openFiles1 = [];

// const each = (coll, iteratee, callback = noop) => {
//   if (coll.length === 0) {
//     callback(null);
//     return;
//   }
  
//   const oncedCallback = once(callback); 

//   let completed = 0;

//   const cb = err => {
//     if (err) {
//       oncedCallback(err);
//     }
//     completed++;
//     if (completed === coll.length) {
//       oncedCallback(null);
//     }
//   };
//   coll.forEach(item => iteratee(item, cb))
// };

 
// each(openFiles, (file, callback) => {
//   if (file.length > 32) {
//     callback('Too long');
//   } else {
//     console.log('File proccessed')
//     callback();
//   }
// },
// (err) => {
//   if (err) {
//     console.log(err, 'failed');
//   } else {
//     console.log('success');
//   } 
// })


   const concat = (coll, iteratee, callback = noop) => {
    if (coll.length === 0) {
      callback(null);
      return;
    }

    const oncedCallback = once(callback);

    let completed = 0;
    let result = []

    const cb = (...args) => {
      const [err, ...data] = args;
      console.log(completed)
      if (err) {
        console.log(err);
        oncedCallback(err);
       }
       result = result.concat(...data);
       completed += 1;
      if (completed === coll.length) {
        console.log(completed)
        oncedCallback(null, result);
      }
    };

    coll.forEach(item => iteratee(item, cb))

    
    // coll.forEach((item) => {
    //   // console.log(typeof item);
    //   // console.log(completed);
    //   // console.log(fs.readdirSync(item));

    //   // console.l og(item, 'i am item', completed);
    //   iteratee(item, cb);
    //   })
    };
  
  
  

const dir1 = '/home/zzpillau/js-practice/src/functional_p';
const dir2 = '/home/zzpillau/js-practice/src/absrtaction';

// fs.readdir(dir1, (err, files) => {
//   if (err) {
//     console.log(err, 'failed');
//   } else {
//     console.log('success', files);
//   } 

// })
  

  concat([dir1, dir2], fs.readdir, (err, files) => {
    if (err) {
      console.log(err, 'failed');
    } else {
    console.log(files);
    } 
   })
