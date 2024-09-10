class Collection {
  constructor(coll) {
    this.coll = coll;
  }

  map(fn) {
    const newColl = this.coll.map((element) => fn(element));
    return new Collection(newColl);
  }

  filter(fn) {
    const newColl = this.coll.filter((element) => fn(element));
    return new Collection(newColl);
  }

  all() {
    return this.coll;
  }
}

const cars = new Collection([
  { model: 'rapid', year: 2016 },
  { model: 'rio', year: 2013 },
  { model: 'mondeo', year: 2011 },
  { model: 'octavia', year: 2014 },
]);

const filteredCars = cars.filter((car) => car.year > 2013);
const mappedCars = filteredCars.map((car) => car.model);
mappedCars.all();
console.log(mappedCars.all());
cars.all()
console.log(cars.all());



