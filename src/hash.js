import crc32 from 'crc-32';

const hashToIndex = (someKey) => {
    const hash = crc32.str(someKey);
    const index = Math.abs(hash) % 1000;
    return index;
  };
  



  
  export const make = () => {
    const internal = [];
    return internal;
  };
  
const map = make();

const hasCollision = (map, newKey) => {
    const collisionIndex = hashToIndex(newKey);
    if (map[collisionIndex]) {
        const [key, ] = map[collisionIndex];
        if (key !== newKey) {
        return true
    }
    return false;
    }
};



export const set = (map, key2, value2) => {
    const setIndex = hashToIndex(key2);
    if (!map[setIndex] || !hasCollision(map, key2)) {
        map[setIndex] = [key2, value2];
    return true;
    }
    const [key,] = map[setIndex];
    if (key === key2) {
      map[setIndex] = [key, value2];
      console.log(setIndex);
      return true;
    }
    return false;

};

export const get = (map, key, defaultValue = null) => {
    const getIndex = hashToIndex(key);
    if (hasCollision(map, key)) {
        return defaultValue;
    }
    if (map[getIndex]) {
        console.log(getIndex);
        console.log(map);
        const [, value] = map[getIndex];
        return value;
    }
    return defaultValue;
};




console.log(set(map, 'key2', 'value2'));
console.log(set(map, 'key2', 'another value'));

console.log(set(map, 'aaaaa0.462031558722291', 'vvv'));
console.log(set(map, 'aaaaa0.0585754039730588', 'boom!'));

console.log(map);

console.log(get(map, 'aaaaa0.0585754039730588'));

console.log(hasCollision(map, 'aaaaa0.462031558722291'));



console.log();

