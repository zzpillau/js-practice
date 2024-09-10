const fromPairs = (arr) => {
    const object = {}
    for (const [key, value] of arr) {
        object[key] = value;
    }
    return object;
};

console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 10]]));