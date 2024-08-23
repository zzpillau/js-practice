// @ts-check

// BEGIN (write your solution here)
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
  
    coll.forEach((item) => iteratee(item, cb));
  };
  

  const detect = (coll, fn, callback) => {
    let result;
    each(coll, (item, cb) => {
      fn(item, (err) => {
        if (err) {
          cb(err);
          return;
        }
          result = item;
          cb(null, item);
      });
    }, (err) => {
      callback(err, result);
    });
  };


export default detect;
// END
