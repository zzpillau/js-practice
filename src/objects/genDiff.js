
const genDiff = (obj1, obj2) => {
    const allKeys = [...Object.keys(obj1), ...Object.keys(obj2)];
    console.log(allKeys);
    const result = {};
    for (const key of allKeys) {
        if (Object.hasOwn(obj2, key)) {
            result[key] = (obj1[key] === obj2[key] ? 'unchanged': 'changed');
            if (!Object.hasOwn(obj1, key)) {
                result[key] = 'added';  
            }
        } else {
        result[key] = 'deleted';
        }  
    }
    return result;
};



console.log(genDiff(
    { one: 'eon', two: 'two', four: true },
    { two: 'own', zero: 4, four: true },
));
    // {
  //   one: 'deleted',
  //   two: 'changed',
  //   four: 'unchanged',
  //   zero: 'added',
  // }
