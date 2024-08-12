import fs from 'fs';

const filePath = '/home/zzpillau/js-practice/src/asynchronous/__fixtures__/arrays/newFile.txt';

console.log(filePath);
console.log(fs.readFileSync(filePath, 'utf-8'));

const functions = [
  (cb) => fs.readFile(filePath, 'utf-8', (err, data) => {
    cb(err, `${data}\nNewTextWithWaterfall`);
  }),
  (data, cb) => fs.writeFile(filePath, data, (err) => {
    cb(err);
  })
];
console.log(typeof functions[0]);

const func = [];

const waterfall = (functions, callback) => {
  if (functions.length === 0) {
    return callback();
  }

  const next = ([head, ...rest], prevresult) => {
    const cb = (...args) => {
      if (args[0]) {
        return callback(args[0]);
      }
      // rest.length === 0  ? callback(err, args) : next(rest, args);
      if (rest.length === 0) {
        callback(...args);
      }
      next(rest, args);
    };
    head(prevresult, cb)
  };
  next(functions, []);
};


waterfall(functions, err => {
  if (err) {
    return console.log(err);
  }
});


