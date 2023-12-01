
const findIndexOfNearest = (arr, num) => {

    const map = arr.map((item) => item - num)
    console.log(arr);
    console.log(map);

    const comp = map.filter((item) => {
        


    })
}


console.log(findIndexOfNearest([], 2));              // null
console.log(findIndexOfNearest([15, 10, 3, 4], 0));  // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4));    // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4)); // 2