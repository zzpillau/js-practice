// @ts-check

// @ts-check

class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  select(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

  orderBy(fn, direction = 'asc') {
    const newOps = this.operations.slice();

    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction !== 'desc' ? 1 : -1;

      if (a1 > b1) {
        return compareResult;
      }
      if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };

    newOps.push(coll => coll.sort(comparator));

    return new Enumerable(this.collection.slice(), newOps);
  }

  where(fn) {
    const newOps = this.operations.slice();

    newOps.push(coll => coll.filter(fn));

    return new Enumerable(this.collection.slice(), newOps);
  }

  toArray() {

    const newColl = this.collection.slice();

    return this.operations.reduce((acc, op) => op(acc), newColl);

  }

  // END
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

const result = coll.orderBy(car => car.year, 'asc')
  .where(car => car.brand === 'bmw')
  .select(car => car.model)
  .toArray()

  console.log(result);
  

// assert.deepEqual(result.toArray(), ['m5', 'm4']);