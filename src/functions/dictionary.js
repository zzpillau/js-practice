import _ from 'lodash'

function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
        return _.uniq(objValue.concat(srcValue));
    }
};


const merge = (...objects) =>  objects

    .map((object) => {
        const values = Object.values(object);
        const keys = Object.keys(object);
        const valueInArray = values.map((value) => [value]);
        const zippedObject = _.zipObject(keys, valueInArray);
        return zippedObject;
    }) 

    .reduce((acc, item) => {
        acc = _.mergeWith(acc, item, customizer)
        return acc;
    }, {})






console.log(merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 },
  ));
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }



  









console.log(merge({}, {}, {}));
// {}
 
console.log(merge({ a: 1, b: 2 }, { a: 3 }));
// { a: [1, 3], b: [2] }
 
