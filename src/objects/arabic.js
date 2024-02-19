import toRoman from '/home/zzpillau/js-practice/src/objects/roman.js'

const arabicNumerals = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}



// стандартный подсчет яблок и бананов! посмотреть как дедается в уроке
// обходим массив, берем Римскиe[М] - 

// делаем объект - 


const romanNumerals = (romanNum, object) => {
  const arr = [...romanNum];
  const obj = {};

  for (let i = 0; i < arr.length; i += 1) {
    const currenNumeral = arr[i];
    const numeralValue = object[currenNumeral];
    obj[numeralValue] = (obj[numeralValue] ?? 0) + 1;
  }
  return obj;
}

const num = 'VI';
console.log(romanNumerals(num, arabicNumerals));

const toArabic = (numInRoman) => {

  const arr = Object.entries(romanNumerals(numInRoman, arabicNumerals));
  const reduce = arr.reduce((acc, pair) => {
    console.log(pair);
    const [x, y] = pair;
    acc = acc + x * y;
    return acc;
  }, 0)

  return numInRoman === toRoman(reduce)? reduce : false;
}

console.log(toArabic(num));