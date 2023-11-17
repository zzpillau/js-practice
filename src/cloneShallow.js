const cloneShallow = (obj) => {
    const cloned = {};
    const keys = Object.keys(obj);
    console.log(keys);
    for (const key of keys) {
        console.log(cloned[key] = obj[key]);
    }
    return cloned;
};



const data = {
    key: 'value',
    key2: {
      key: 'innerValue',
      innerKey: {
        anotherKey: 'anotherValue',
        },
    },
};

console.log(cloneShallow(data));
