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



const openFiles = [
  'js-practice/src/asynchronous/fixtures/file1',
  'js-practice/src/asynchronous/fixtures/file2',
  'js-practice/src/asynchronous/fixtures/file3',
  'js-practice/src/asynchronous/fixtures/file4',
];

const openFiles1 = [];

const each = (coll, iteratee, callback = noop) => {
  if (coll.length === 0) {
    callback(null);
    return;
  }
  
  const oncedCallback = once(callback); 

  let completed = 0;

  const cb = err => {
    if (err) {
      oncedCallback(err);
    }
    completed++;
    if (completed === coll.length) {
      oncedCallback(null);
    }
  };
  coll.forEach(item => iteratee(item, cb))
};




each(openFiles, (file, callback) => {
  if (file.length > 32) {
    callback('Too long');
  } else {
    console.log('File proccessed')
    callback();
  }
},
(err) => {
  if (err) {
    console.log(err, 'failed');
  } else {
    console.log('success');
  
  }

})


