const make = (name, properties) => {
    const defaultProperties = {};
    defaultProperties.state = 'moderating';
    defaultProperties.createdAt = Date.now();
    const company = {name, ...defaultProperties, ...properties};
    return company;
};

const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }

console.log(company);

const company1 = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

console.log(company1);

// @ts-check

// BEGIN

//  export default (name, data = {}) => {
//      const defaultData = {
//      state: 'moderating',
//      createdAt: Date.now(),
//      };
//  
//      return { ...defaultData, ...data, name };
//  };
//  // END
//  

