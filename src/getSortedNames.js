
const getSortedNames = (obj) => {
  let arr = [];
  for (const user of obj) {
    const {name} = user;
    arr.push(name);
  }
  return arr.sort();
};






const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  ];
   
  
  console.log(getSortedNames(users)); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
  
  // @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN

// export default (users) => {
//   const names = [];

//   for (const { name } of users) {
//     names.push(name);
//   }

//   return names.sort();
// };
// END
