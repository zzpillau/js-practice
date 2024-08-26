import EventEmitter from 'events';

// class Clock extends EventEmitter {
//   start() {
//     let tic = true;
//     this.interval = setInterval(() => {
//         const event = tic ? 'tic' : 'toc';
//         this.emit(event, Date.now());
//         tic = !tic;
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.interval);
//   }
// };

// const clock = new Clock();
// clock.on('tic', t => console.log('tic: %d', t));
// clock.on('toc', t => console.log('toc: %d', t));
// clock.start();

// setTimeout(() => {
//     clock.stop();
// }, 10000);


const emitter = new EventEmitter;

// console.log(emitter)

emitter.once('beep', () => console.log('beep'));
emitter.on('beep', () => console.log('loop again'));


emitter.emit('beep');

console.log(emitter);


