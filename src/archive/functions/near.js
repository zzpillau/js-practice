
const findIndexOfNearest = (arr, num) => {

    if (arr.length === 0) {
        return null;
    }

    const diffArray = arr.map((item) => Math.abs(item - num))
    console.log(diffArray);

        let char = diffArray[0];

    const index = diffArray.reduce((acc, diffItem) => {
            if (diffItem < char && diffItem >= 0) {
                char = diffItem;
                acc.push(diffArray.indexOf(char));
            }
            return acc;
}, []);
return index;
}


console.log(findIndexOfNearest([], 2));              // null
console.log(findIndexOfNearest([15, 10, 3, 4], 0));  // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4));    // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4)); // 2
console.log(findIndexOfNearest([15, 10], 12));