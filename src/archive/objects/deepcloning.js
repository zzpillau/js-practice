"use strict"
import isObject from 'lodash/isObject.js';

const deepClone = (obj) => {

  const cloned = {}
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (!isObject(obj[key])) {
      cloned[key] = obj[key];
    } else {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}







export default deepClone;


const data = {
    key: 'value',
    key2: {
      key: 'innerValue',
      innerKey: {
        anotherKey: 'anotherValue',
      },
    },
  };

  const clone = deepClone(data);
  console.log(data.key2 === clone.key2);

  console.log(deepClone(data));