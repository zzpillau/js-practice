const isEven = (num) => num % 2 === 0;

const sameParity = (numbers) =>  {
    
    const parityOfFirstElement = isEven(...numbers);

    const result = numbers.reduce((acc, number) => {
        if (isEven(Math.abs(number)) === parityOfFirstElement) {
            acc.push(number)
        }
        return acc
}, [])
    return result;
};

console.log(sameParity([-1, 0, 1.5 , -3, 10, -2])); // [-1, 1, -3]
console.log(sameParity([10, -1.5, 1.3, -3, 25, -2])); // [2, 0, 10, -2]
// console.log(sameParity([])); // []

console.log();
