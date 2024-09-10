
const bqs = (object) => {
    let objectToArray = [];
    let entries = Object.entries(object).sort();
    for (const item of entries) {
        
        objectToArray.push(item.join('='));
    }
        const sorted = objectToArray;
        return sorted.join('&');
};



console.log(bqs({ per: 10, page: 1 }));
// page=1&per=10
console.log(bqs({ param: 'all', param1: true }));
// param=all&param1=true

console.log(bqs({
    a: 10,
    s: 'Wow',
    d: 3.2,
    z: '89',
  }));