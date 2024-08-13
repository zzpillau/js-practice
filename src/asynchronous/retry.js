import fs from 'fs';

const retry = (count, fn, callbackFinal) => {
  let calledTimes = 0;
  fn((cb) => {
    cb(err, body);
  })
}




retry(3, callback =>
  fs.readFile('file.txt', (err, body) => {
    callback(err, body);
  }), (err, result) => {
    console.log(result);
});