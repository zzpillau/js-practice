const students = [
    { name: 'Tirion', classy: 'B', mark: 3 },
    { name: 'Keit', classy: 'A', mark: 3 },
    { name: 'Ramsey', classy: 'A', mark: 4 },
];


const groupBy = (items, property) => {
    const cb = (acc, item) => {
        const newKey = item[property];
        if (!Object.hasOwn(acc, item[property])) {
            acc[newKey] = [];
        }
        acc[newKey].push(item);
        return acc;
    }
    return items.reduce(cb, {});
};


console.log(groupBy([], ''));// {}
console.log(groupBy(students, 'mark'));

// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }