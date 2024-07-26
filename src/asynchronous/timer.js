import fs from 'fs';

const checkChange = (filepath, cb) => {
  fs.stat(filepath, (err, stat)=>{
    if (err) {
      console.log('fs.stat error');
      return cb(err);
    }
    cb(null, stat.mtimeMs);
  });
}

const watcher = (filepath, timeout, cb) => {
  const state = {
    mtimeMs: 0,
    startTime: 0,
  }
  state.startTime = Date.now();

// console.log(state);

  // setInterval(() => {checkChange}
  // , timeout)

  

}


const filepath = '/home/zzpillau/js-practice/src/asynchronous/newFile.txt';

const wtf = checkChange(filepath, (err) => {
  console.log('state.mtimeMs undefinied error');
});

console.log(wtf);

const id = watcher(filepath, 500, (err) => {
  console.log('wow!')
});

console.log(id);

    // console.log(stat.mtimeMs);
    // state.mtimeMs = stat.mtimeMs;
    // state.startTime = Date.now();
    // console.log(state);
