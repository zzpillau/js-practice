const asyncMap = (coll, fn, cb) => {
    if (coll.length === 0) {
        cb(coll);
        return;
    } 
    const iter = ([head, ...rest], acc) => {
        const newAcc = [...acc, fn(head)];
        if (rest.length === 0) {
            cb(newAcc);
            return;
        }
        setTimeout(iter, 0, rest, newAcc);
    }
    iter(coll, []);
}

const coll = [10, 53, true, false, '', NaN, 22];

asyncMap(coll, (x) => `${x} mapped`, (result) => {
    console.log(result);
});

asyncMap(coll, (x) => typeof x, (result) => {
    console.log(result);
});
 

export default asyncMap;