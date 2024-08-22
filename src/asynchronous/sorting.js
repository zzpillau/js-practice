import fs from 'fs';

const file1 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file1'
const file2 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file2'
const file3 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file5'

const noop = () => {};

const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};

const each = (coll, iteratee, callback = noop) => {
    const oncedCallback = once(callback);
    let completed = 0;
    if (coll.length === 0) {
      callback(null);
      return;
    }
  
    const cb = (err) => {
      if (err) {
        oncedCallback(err);
        return;
      }
      completed += 1;
      if (completed === coll.length) {
        oncedCallback(null);
     }
    };
  
    coll.forEach((item, i) => iteratee(item, i, cb));
  };
  
  const sortBy = (coll, fn, callback = noop) => {
    const result = [];
    each(coll, (item, i, cb) => {
      fn(item, (err, sort) => {
        result.push([item, sort]);
        cb(err)
      });
    }, (err) => {
      console.log('final res', result);
      callback(err, sortResult(result));
    });
  };


  const sortResult = (result) => result
    .sort((a, b) => a[1] - b[1])
    .map((el) => el[0])
  

  const coll = [1, 2, 3, 4, 5];

    sortBy(coll, (x, callback) => {
      callback(null, x % 2);
    }, (err,result) => {
      console.log(result); // [2, 4, 1, 3, 5]
    });
  
  
  // sortBy([1, 9, 3, 5], (x, callback) => {
  //   callback(null, x);
  // }, (err,result) => {
  //   console.log(result);
  // });

  // sortBy([1, 9, 3, 5], (x, callback) => {
  //   callback(null, x * -1);
  // }, (err,result) => {
  //   console.log(result);
  // });  


  // sortBy([file1, file2, file3], (file, callback) => {
  //   fs.stat(file, (err, stats) => {
  //     callback(err, stats.mtime);
  //   });
  // }, (err, result) => {
  //   console.log(result);
  // });  
