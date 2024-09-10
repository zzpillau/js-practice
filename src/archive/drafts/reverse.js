  export const reverse = (str) => {
    const lastIndex = str.length - 1;

   const iter = (index, acc) => {
      if (index > lastIndex) {
        return acc;
      }
      return iter(index + 1, `${str[index]}${acc}`)
    }
    return iter(0, '');
  }

console.log(reverse('qwerty'));

// @ts-check
// export default (str) => {
//   const lastIndex = str.length - 1;
//   // BEGIN
//   const iter = (index, acc) => {
//     if (index > lastIndex) {
//       return acc;
//     }
//     return iter(index + 1, `${str[index]}${acc}`);
//   };
//   // END
//   return iter(0, '');
// };