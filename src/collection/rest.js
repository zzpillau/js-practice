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
    
    const collKeys = Object.keys(this.collection);
    
    const result = myArgs.map((arg) => {
      if (typeof arg === 'function') {
        return (coll) => coll.filter(arg);
        
      }

      const searchKey = Object.keys(arg);
      const [key] =searchKey;
      return (coll) => coll.filter(arg);
    
    });

    return this.build(...result)
    
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

const result = coll
  .where(car => car.brand === 'kia')
  .where(car => car.year > 2011);

result.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]

const result2 = coll.where({ brand: 'bmw' });
result2.toArray();
// [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
// ]

const result3 = coll.where({ brand: 'kia', model: 'sorento' });
result3.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const result4 = coll.where({ brand: 'kia' }, {  model: 'sorento' });
result4.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const result5 = coll.where({ brand: 'kia' }, car => car.year < 2013);
result5.toArray();
// [
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]




