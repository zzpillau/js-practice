"use strict"

import _ from 'lodash';

const fill = (obj1, keys, obj2) => {
    let picked = _.pick(obj2, keys);

    console.log(picked);
    if (keys.length === 0) {
        Object.assign(obj1, obj2);
    }
    Object.assign(obj1, picked);
    console.log(obj1);
};


const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};



console.log(fill(company, [], data));
// {
//   name: 'Hexlet',
//   state: 'published'
// }

