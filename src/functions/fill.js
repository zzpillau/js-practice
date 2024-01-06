const fill = (coll, value, start = 0, end = coll.length) => {

        coll.map((item) => {
        console.log(item);
        if (coll.indexOf(item) >= start && coll.indexOf(item) < end) {
        coll[coll.indexOf(item)] = value;
        console.log(value);
        console.log(coll);
        }
    })

    return coll;
};

const array =  [1, 2, 3, 4];
console.log(fill(array, '*', 1, 3));

console.log(fill(array, '*'));
