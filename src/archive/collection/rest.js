// @ts-check

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
  where(...args) {
    const myArgs = args;

    const cb = (someArg) => (someEl) => {
      const keys = Object.keys(someArg); // тут массив ключей аргс
        return keys.every((key) => someEl[key] === someArg[key]);
    }

    const result = myArgs.map((arg) => {
      if (typeof arg === 'function') {
        return (coll) => coll.filter(arg);
      }

      
      const callback = cb.call(this, arg)
      return (coll) => coll.filter(callback);
    
    });


    return this.build(result)
  }
  
  // END



  getProcessedCollection() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }

  get length() {
    return this.getProcessedCollection().length;
  }

  toArray() {    
    
    return this.getProcessedCollection().slice();
  }
}

export default Enumerable;


const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
const coll = new Enumerable(cars);



const result = coll.where();
console.log(result.toArray());


