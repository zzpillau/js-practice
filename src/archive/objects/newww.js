
const arabicNumerals = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

const romanNumerals = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
}

const getDigits = (num) => {
  const digits = {};
  const numLength = num.toString().length;
  let currentNum = num;

  for (let i = 1000; i > numLength; i /= 10) {
    if ((currentNum - digits[i] * i) < 0) {
      digits[i] = 0;
    } 
    digits[i] = Math.floor(currentNum / i);
    currentNum = currentNum - digits[i] * i;
  }
  digits[1] = currentNum;
  return digits;
}


const convertNum = (currentKey, currentValue, object) => {
  let result = []
  const valueRoman = object[currentKey];
  const searchFiveRoman = object[currentKey * 5];
  const searchTenRoman = object[currentKey * 10];
  const valueToRepeat = valueRoman.repeat(currentValue);

  switch (true) {
  case (currentValue > 0 && currentValue <= 3):
    result.push(valueToRepeat);
    break;
    case (currentValue === 4):
      const valueToRepeatBeforeFive = valueRoman.repeat(5 - currentValue);
      result.push(valueToRepeatBeforeFive, searchFiveRoman);
      break;
    case (currentValue === 5):
      result.push(searchFiveRoman);
      break;
    case (currentValue > 5 && currentValue <= 8):
      const valueToRepeatAfterFive = valueRoman.repeat(currentValue - 5);
      result.push(searchFiveRoman, valueToRepeatAfterFive);
      break;
    case (currentValue === 9):
      const valueToRepeatBeforeTen = valueRoman.repeat(10 - currentValue);
      result.push(valueToRepeatBeforeTen, searchTenRoman);
      break;
    case (currentValue === 0):
      result.push([]);
      break;
    default:
      throw new Error(`Unknown numeral: '${currentValue}'!`)
    }
  return result.flat();
  };

export const toRoman = (numInArabic) => {

  const digits = getDigits(numInArabic);
  const digitsPair = Object.entries(digits).reverse();
  const result = digitsPair.reduce((acc, pair) => {
      const [x, y] = pair;
      if (y !== 0) {
        acc.push(convertNum(x, y, romanNumerals))
      }
    return acc;
  }, []);
  return result.flat().join('');
}
// ////////////////////////////////////////////////////

// XCIII

const getRomanNumerals = (romanNum, object) => {
  const arr = [...romanNum];
  const obj = {};

  for (let i = 0; i < arr.length; i += 1) {
    const currenNumeral = arr[i]; // X
    const nextNumeral = arr[i + 1] ?? 'pusto'; // C
    const nextNumeralValue = object[nextNumeral] ?? 0; // 
    const numeralValue = object[currenNumeral]; // 10
    const prevNumeral = arr[i - 1] ?? 'pusto';
    const prevNumeralValue = object[prevNumeral] ?? 0; // 

    if (numeralValue < object[nextNumeral]) {
      switch (nextNumeral) {
        case 'V':
        case 'L':
        case 'D':
          obj[numeralValue] = 4;
          break;
        case 'X':
        case 'C':
        case 'M':
          obj[numeralValue] = 9;
          break;
        default:
          throw new Error(`Unknown numeral: '${nextNumeral}'!`)
      }
    } else {
    obj[numeralValue] = (obj[numeralValue] ?? 0) + 1;
    }
    if (obj[prevNumeralValue] === 4 || obj[prevNumeralValue] === 9) {
        obj[numeralValue] = 0;
      }
    }
  return obj;
}


const toArabic = (numInRoman) => {

  const arr = Object.entries(getRomanNumerals(numInRoman, arabicNumerals));
  const reduce = arr.reduce((acc, pair) => {
    const [x, y] = pair;
    acc = acc + x * y;
    return acc;
  }, 0)
  // console.log(reduce);
  return numInRoman === toRoman(reduce)? reduce : false;
}

console.log(getRomanNumerals('CXLI', arabicNumerals)); // 93
console.log(toArabic('CXLI'), 141);


console.log(getRomanNumerals('IV', arabicNumerals)); // 4
console.log(toArabic('IV'), 4);
// console.log(getRomanNumerals('XLVIII', arabicNumerals)); // 48
// console.log(toArabic('XLVIII'), 48);
// console.log(getRomanNumerals('LIX', arabicNumerals)); // 59
// console.log(toArabic('LIX'), 59);
