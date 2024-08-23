import fs from 'fs';
import async from 'async';

const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};


const each = (coll, iteratee, callback) => {
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
    if (completed === 1) {
      oncedCallback(null);
    }
  };

  coll.forEach((item, i) => iteratee(item, i, cb));
};


const detect = (coll, fn, callback) => {
  let result;
  each(coll, (item, i, cb) => {

    fn(item, (err) => {


      console.log(item);

      if (!err) {
        result = item;
        cb(err);

      }

      if (i === coll.length -1) {
      cb(err);

      }


    });
  }, (err) => {
    callback(err, result);
  });
};


export default detect;


  const coll1 = [8, 9];
  detect(coll1, (item, callback) => {
    callback('error');
  }, (err) => {
    console.log('final error', err);
    
  });

  
  const coll = [1, 2, 5];
  detect(coll, (item, callback) => {
    if (item === 2) {
      callback(null, item);
    } else {
      callback('error two');
    }
  }, (err, result) => {
console.log(err);
console.log('final result', result);
  });



  const file1 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file1';
  const file2 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file2';
  const file3 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file3';
  
  async.detect([file1, file2, file3], (filePath, callback) => {
    fs.access(filePath, err => {
      callback(null, !err)
    });
  }, (err, result) => {
      console.log(result);
      // result now equals the first file in the list that exists
  });
  
