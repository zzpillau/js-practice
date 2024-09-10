const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

console.log(getGcd(2, 3));

const makeRational = (numer, denom) => {
    const numerNorm = numer / getGcd(numer, denom);
    const denomNorm = denom / getGcd(numer, denom);
    return { numer: numerNorm, denom: denomNorm };
}

console.log(makeRational(3, 9));
console.log(makeRational(-3, 9));

const getNumer = (rat) => rat.numer;
const getDenom = (rat) => rat.denom;

const rat1 = makeRational(1, 15);
const rat2 = makeRational(4, 25);

const add = (rat1, rat2) => {
    const lcm = rat1.denom * rat2.denom;
    const rat1mod = rat1.numer * rat2.denom;
    const rat2mod = rat2.numer * rat1.denom;
    return makeRational(rat1mod + rat2mod, lcm);
}

console.log(add(rat1, rat2));

const sub = (rat1, rat2) => {
    const lcm = rat1.denom * rat2.denom;
    const rat1mod = rat1.numer * rat2.denom;
    const rat2mod = rat2.numer * rat1.denom;
    return makeRational(rat1mod - rat2mod, lcm);
}