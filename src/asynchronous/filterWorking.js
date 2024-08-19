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

  // for (let item of coll) {
  //   iteratee(item, cb)
  // }
  
  coll.forEach((item) => {

    iteratee(item, cb)
  });
};



const filter = (coll, fn, callback) => {
  const result = [];
  
  each(coll, (item, cb) => {
    fn(item, (err, data) => {
      if (!!data) {
        result.push(item)
       }
       
      cb(err);
    });
  }, (err) => {
    callback(err, result);
  });
};

// coll.forEach(item => iteratee(item, cb.bind(null, item)));


  filter([2, 8, 2, 1, 1, 3, 7, 10, 1, 4], (item, callback) => {
    callback(null, item % 2 === 0);
  }, (err, results) => {
    console.log(results); // => [2, 8, 2, 10, 4]
  });

  