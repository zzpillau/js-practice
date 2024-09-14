import _ from 'lodash';

class Enumerable   {

  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  static wrap(coll) {
    return new Enumerable(coll);
  }


  build(op) {
    return new Enumerable(this.collection.slice(), this.operations.concat(op));
  }

  where(key, value) {
    const callback = (coll) => {

      return coll.filter((el) => el[key] === value)

    };

    return this.build(callback);
  }

  allWithMemoization() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection); 
    }

    return this.memo;
  }

  all() {
    return this.allWithMemoization().slice();
  }
 
}

const elements = [
  { key: 'value', year: 1932 },
  { key: '', year: 1100 },
  { key: 'value', year: 32 },
  { key: 'value2', year: 32 },
];
const coll = Enumerable.wrap(elements.slice());
const result1 = coll.where('key', 'value');

const expected1 = [
  { key: 'value', year: 1932 },
  { key: 'value', year: 32 },
];

console.log(result1.all()); // expected1
console.log(coll.all()); // elements

