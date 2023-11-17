const get = (obj, keys) => {
  let current = obj;
  for (const key of keys) {
    if (Object.hasOwn(current, key)) {
    current = current[key];
  } else {
    return null;
  }
}
  return current ?? null;
};




const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};
 
console.log(get(data, ['hosts', 1, 'name'])); // 'web2'


