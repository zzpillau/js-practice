const savePassword = (password) => {
    return (checkPassword) => {
        return password === checkPassword;
    }
}

const secret = 'zzpillau';

const isCorrectPassword = savePassword(secret); // здесь замыкание и сохранен пароль при вызове savePassword;

console.log(isCorrectPassword('zz')); // вызываем, передавая аргумент для возвращаемой функции-предиката
console.log(isCorrectPassword('zzpillau'));

const sub = (a, b) => a - b;

const flip = (fn) => (a, b) => fn(b, a)

const reverseSub = flip(sub);

console.log(sub(5, 3)); // 2
console.log(reverseSub(5, 3)); // -2
