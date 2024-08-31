import fs from 'fs';
import _ from 'lodash';

// const f = () => console.log('hi!');

// const foo = (message) => console.log(message);


// setTimeout(f, 1000)

// const id1 = setInterval(f, 2000);
// setTimeout(() => clearInterval(id1), 8000);

// setTimeout(foo.bind(null, 'ho-ho-ho'), 1000)

// const watch = (filepath, timeout, cb) => {
//   const now = Date.now();

//   const timerid = setInterval(() =>
//     {
//       let lastchange = 0;
//     fs.stat(filepath, (err, stats) => {
//     const changedetect = stats.mtimeMs - now;
//     if (lastchange < changedetect) {
//         cb(err )
//     }
//     lastchange = changedetect;
//     })}, timeout);
    
//     return timerid;
// }

// const filepath = '/home/zzpillau/js-practice/src/asynchronous/watcherFile.txt';

// const id3 = watch(filepath, 500, (err) => {
//     console.log('Wow!');
//   });
  
//   setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
//   setTimeout(() => clearInterval(id3), 5000); // остановить отслеживание через 5 секунд =


  const makeTimer222 = (totalTime, cb) => {
    const interval = 100;
    const timer = {
      state: 'working',
      elapsedTime: interval,
      start() {
        const callback = cb.bind(null, timer)
        const id = setInterval(() => {
          if (timer.elapsedTime > totalTime) {
            timer.state = 'finished';
            clearInterval(id);
          }
          callback()
          timer.elapsedTime = timer.elapsedTime + interval;
        }, interval);
      }
    }
    return timer;
  }


  const makeTimer = (totalTime, cb) => ({
    interval: 100,
    state: 'working',
    elapsedTime: 0,
    // counter: totalTime,
    start() {

      const id = setInterval(() => {
        this.elapsedTime += this.interval;

        if (this.elapsedTime >= totalTime) {
          this.state = 'finished';

          clearInterval(id, totalTime);
        }
        const {elapsedTime, state } = this 
        const cb1 = cb.bind(this);
        cb1({state, elapsedTime});
        // this.counter -= this.elapsedTime;
      }, this.interval);

    },
  })


  // const cb = ({ state, elapsedTime }) => {
  //   switch (state) {
  //     case 'working':
  //       console.log(`Time elapsed: ${elapsedTime}`);
  //       break;
  //     case 'finished':
  //       console.log(`Timer has finished!`);
  //   }
  // };

  // const tm = makeTimer(1000, cb);
  
  // tm.start();


  const time = 1000;
  const laps = [];
  const timer = makeTimer(time, (data) => {
    // console.log(data);
    
    
    laps.push(data);
    console.log('laps', laps);

  });

  setTimeout(() => {
    const firstLap = laps[0];
    console.log(laps);
    
    // expect(firstLap.elapsedTime).toBeGreaterThanOrEqual(100);
    
    // // expect(firstLap.elapsedTime).toBeLessThan(150);
    console.log(firstLap.elapsedTime);

    
    // // expect(firstLap.state).toBe('working');
    console.log(firstLap.state);
    

    const lastLap = _.last(laps);

    // expect(lastLap.state).toBe('finished');
    console.log(lastLap.state);
    // console.log(laps);
    
    

  }, 1200);

  timer.start();

  
  
  
   