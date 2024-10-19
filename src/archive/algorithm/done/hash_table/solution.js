import Hash from './hash/Hash.js';

const solution = (map, key) => {

  const hash = new Hash();

  for (const [key, value] of Object.entries(map)) {
      hash.set(key, value);
  }

  return remove(hash, key);
}


const remove = (table, key) => {
  console.log(table);
  console.log(key);
  
  
}

const table = new Hash();
table.set('key', 'value');
console.log(table.get('value'));

// table.set("key1", "value1");

// console.log(JSON.stringify(table, null, '  '));


// const removed = remove(table, "key");
// console.log(removed); // => value

// В хеше ключа больше нет
 // undefined



