const objectify = (coll, selector) => coll
  .reduce((prevAcc, el) => {
    const result = {[selector(el)]: el}
    return prevAcc = {...result, ...prevAcc}
  }, {});



const cars = [
  {
    id: 1, brand: 'bmw', model: 'm5', year: 2014,
  },
  {
    id: 8, brand: 'bmw', model: 'm4', year: 2013,
  },
  {
    id: 100, brand: 'kia', model: 'sorento', year: 2014,
  },
  {
    id: 93, brand: 'kia', model: 'rio', year: 2010,
  },
  {
    id: 70, brand: 'kia', model: 'sportage', year: 2012,
  },
];

console.log(objectify(cars, (car) => car.id));
