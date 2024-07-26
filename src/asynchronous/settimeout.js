//setTimeout

const f = () => console.log('Hey!');
console.log('before');
// setTimeout(f, 1000)

const timerId = setTimeout(f, 1000);
// console.log(timerId);
// console.log(typeof(timerId));
console.log('after');


clearTimeout(timerId)

const fun = (a, b) => console.log(a + b);

setTimeout(fun, 2000, 5, 8);

setTimeout(() => fun(5, 8), 3000);

setTimeout(fun.bind(null, 5, 8), 3000)

//setInterval 

const id = setInterval(() => console.log(new Date()), 5000);
setTimeout(() => clearInterval(id), 16000);