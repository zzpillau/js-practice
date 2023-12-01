
// испытание Объекты Детектирование

const findWhere = (listArray, keyValueObj) => {
    const entries = Object.entries(keyValueObj);
    let flag = [];
    for (const element of listArray) {
        for (const [key, value] of entries) {
            if (element[key] === value) {
            flag.push(true);
            } else {
            flag.push(false);
            }
        }
        if (!flag.includes(false)) {
            return element
        }
        flag = []
    }
    return null;
};


const data = [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
    ]; 

console.log(findWhere(data, { author: 'Shakespeare', year: 1611 }));  // { title: 'Cymbeline', author: 'Shakespeare', year: 1611 }

console.log(findWhere(data, { author: 'undefined', year: 2222 })); // null

console.log(findWhere(data, { author: 'Shakespeare', year: 1611, title: 'The Tempest' }));
console.log(findWhere(data, { year: 4444 }));