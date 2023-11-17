
const randomNum = (maxNum) => Math.floor(Math.random() * maxNum);

const progress = () => {
  let arr = [];
  let start = randomNum(7);
  let add = randomNum(7);
  arr.push(start);
  for (let i = 0; i < 9; i += 1) {
    let sum = start + add;
    arr.push(sum);
    start = sum;
  }
  return arr;
};

const prog = progress();
console.log(prog);

let item;

const replaceWithDots = (prog) => {
  const myProg = prog;
  const index = randomNum(prog.length);
  item = myProg[index]; //
  myProg[index] = '..';
  return myProg;
};

console.log(replaceWithDots(prog).join(' ')); // вопрос
console.log(item.toString()); // ответ
