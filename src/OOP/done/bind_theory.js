// const printer = {
//   name: 'Hexlet',
//   print(greeting = 'hello') {
//     console.log(`${greeting}, ${this.name}`)
//   }
// }

// // printer.print();

// // setTimeout(printer.print, 1000);

// // setTimeout(() => printer.print(), 1000);


// const fn = () => printer.print();

// // fn();

// const value = 'hi';
// // setTimeout(() => printer.print(value), 1000);


// const boundPrint = printer.print.bind(printer);

// boundPrint()

// setTimeout(boundPrint, 1000)

// setTimeout(printer.print.bind(printer, 'hi'), 1000)

// const print = printer.print;
// print.bind(printer)('eeeey')

// // func.apply(thisArg, [ argsArray])
// print.apply(printer, ['heeey'])

// // func.call([thisArg[, arg1, arg2, ...argN]])
// print.call(printer, 'helllllo')



const greeting = (a) => (b) => (c) => (d) => console.log(`${a}${b}${c}${d}`);

greeting('d')('u')('c')('k');
// greeting();
// greeting();
// greeting();
// greeting();