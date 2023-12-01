const users = [
    { name: 'Igor', age: 19 },
    { name: 'Danil', age: 4 },
    { name: 'Ivan', age: 4 },
    { name: 'Matvey', age: 16 },
];

const callback = (acc, user) => {
    if (!Object.hasOwn(user, user.age)) {
        acc[user.age] = [];
    }
    acc[user.age].push(user.name);
    return acc;
};





const usersByAge = {};
for (const {age, name} of users) {
    if (!Object.hasOwn(usersByAge, age)) {
    usersByAge[age] = [];
    }
    usersByAge[age].push(name);
    }
    console.log(usersByAge);

const users1 = [
    { name: 'Igor', amount: 19 },
    { name: 'Danil', amount: 1 },
    { name: 'Ivan', amount: 4 },
    { name: 'Matvey', amount: 16 },
];

const sum1 = users1.reduce((acc, user) => acc + user.amount, 0)
console.log(sum1);
