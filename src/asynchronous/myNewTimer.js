const f = (message) => {
  console.log(message);
}

// setTimeout(f, 3000, 'Hiii!!!');

// setTimeout(() => f('Hey!'), 1000)

// setTimeout(f.bind(null, 'Ouch!'), 2000)


// const id = setInterval(f.bind(null, 'Interval'), 2000);
// setTimeout(() => clearInterval(id), 16000);

// let counter = 0;
// const id = setInterval(() => {
//   if (counter === 4) {
//     clearInterval(id);
//   }
//   console.log(counter);
//   counter += 1;
// }, 5000);



// const watch = (filePath, interval, callback) => {
//   const timerId = setInterval(() => {
//     fs.stat(filePath, (error, stats) => {
//       if (error) {
//         clearInterval(timerId);
//         callback(error);
//       } else if (Date.now() > stats.mtimeMs + interval) {
//         callback();
//       }
//     });
//   }, interval);

//   return timerId;
// }

// export default watch;
