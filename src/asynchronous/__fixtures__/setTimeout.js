import fs from 'fs';

const f = () => console.log('hi!');

const foo = (message) => console.log(message);


setTimeout(f, 1000)

const id1 = setInterval(f, 2000);
setTimeout(() => clearInterval(id1), 8000);

setTimeout(foo.bind(null, 'ho-ho-ho'), 1000)

const watch = (filepath, timeout, cb) => {
  const now = Date.now();

  const timerid = setInterval(() =>
    {
      let lastchange = 0;
    fs.stat(filepath, (err, stats) => {
    const changedetect = stats.mtimeMs - now;
    if (lastchange < changedetect) {
        cb(err )
    }
    lastchange = changedetect;
    })}, timeout);
    
    return timerid;
}

const filepath = '/home/zzpillau/js-practice/src/asynchronous/watcherFile.txt';

const id3 = watch(filepath, 500, (err) => {
    console.log('Wow!');
  });
  
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
  setTimeout(() => clearInterval(id3), 5000); // остановить отслеживание через 5 секунд =


  const makeTimer = (timeout, callback) => {
    const interval = 100;
    const timer = {
      state: 'working',
      elapsedTime: interval,
    }
    const { state, elapsedTime } = timer;
    const id = setInterval(() => {
      callback(state, )
      
    }, interval);
    clearInterval(id);
  }