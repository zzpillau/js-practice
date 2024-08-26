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
  
  coll.forEach((item, i) => {

    iteratee(item, i, cb)
  });
};



const filter = (coll, fn, callback) => {
  const result = [];
  
  each(coll, (item, i, cb) => {

    fn(coll[i], (err, predicat) => {   
  
      if (predicat) {
        result.push(item)
        
       } else {
        result.push()
       }
      
       
      cb(err);
    });
  }, (err) => {
    callback(err, result.filter((el) => el !== undefined));
  });
};

// coll.forEach(item => iteratee(item, cb.bind(null, item)));


  filter([2, 8, 2, 1, 1, 3, 7, 10, 1, 4], (item, callback) => {
    const randomTimeout = () => Math.ceil(Math.random() * 10);

    setTimeout(() => callback(null, item % 2 === 0), randomTimeout());
    }, (err, results) => {
    console.log(results); // => [2, 8, 2, 10, 4]
  });


  // filter([0, -1, -2, 3, -4], (item, callback) => {
  //   callback(null, item <= 0);
  // }, (err, results) => {
  //   console.log(results);
  // });

  