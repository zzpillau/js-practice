const noop = () => {};

const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};


// const filterColl = (collection) => collection

//   .reduce((acc, el) => {
//     const newAcc = acc;
//     const [value, index] = el;
//     newAcc[index] = value || [];
//     return [...newAcc];
//   }, [])

//   .filter((el) => !!el);


  const filterColl = (collection) => {

    const newColl = []
    collection.forEach((el) => {
    const [value, index] = el;
    newColl[index] = value;
  }, []);
  console.log(newColl)

  // return newColl.filter((el) => !!el || el === undefined);
  return newColl.filter((el) => el !== false);
  }

  // return newCollection;


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

const filter = (coll, fn, callback) => {
  let result = [];
  each(coll, (item, i, cb) => {
    fn(item, (err, predicat) => {
      console.log(item);
      if (predicat) {
      result.push([item, i])
    };
      cb(err);
    });
  }, (err) => {
    console.log(result, 'result')
    callback(err, filterColl(result));
  });
};

filter([0, -1, -2, -4], (item, callback) => {
  callback(null, item <= 0);
}, (err, results) => {
  console.log(results); // => [2, 8, 2, 10, 4]
});

console.log(undefined % 2 === 0)