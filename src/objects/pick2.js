import _ from 'lodash';

const fill = (obj1, keys, obj2) => {
    const picked = _.pick(obj2, keys);
    console.log(picked);
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

// Вызовы ниже нужно рассматривать как независимые

console.log(fill(company, ['name'], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }
