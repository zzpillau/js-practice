

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


const switcher = (currentKey, currentValue, object) => {
  let result = []

  const valueRoman = object[currentKey];

  console.log(valueRoman);

  const searchFiveRoman = object[currentKey * 5];

  console.log(searchFiveRoman);

  const searchTenRoman = object[currentKey * 10];


  const valueToRepeat = valueRoman.repeat(currentValue);

  console.log(valueToRepeat);



  if (currentValue > 0 && currentValue <= 3) {

    result.push(valueToRepeat);
  };

  if (currentValue === 4) {
    const valueToRepeatBeforeFive = valueRoman.repeat(5 - currentValue);
    result.push(valueToRepeatBeforeFive, searchFiveRoman)
  }

  if (currentValue === 5) {
    result.push(searchFiveRoman);
  }

  if (currentValue > 5 && currentValue <= 8) {
    const valueToRepeatAfterFive = valueRoman.repeat(currentValue - 5);
    result.push(searchFiveRoman, valueToRepeatAfterFive)
  }

  if (currentValue === 9) {
    const valueToRepeatBeforeTen = valueRoman.repeat(10 - currentValue);
    result.push(valueToRepeatBeforeTen, searchTenRoman)
  }

  if (currentValue === 0) {
    result.push([]);
  }
  return result.flat();
  }




// console.log(switcher(10, 0, romanNumerals));
// console.log(switcher(10, 1, romanNumerals));
// console.log(switcher(10, 2, romanNumerals));
// console.log(switcher(10, 3, romanNumerals));
// console.log(switcher(10, 4, romanNumerals));
// console.log(switcher(10, 5, romanNumerals));
// console.log(switcher(10, 6, romanNumerals));
// console.log(switcher(10, 7, romanNumerals));
// console.log(switcher(10, 8, romanNumerals));
// console.log(switcher(10, 9, romanNumerals));










const toRoman = (numInArabic) => {

  const digits = getDigits(numInArabic);
  const digitsPair = Object.entries(digits).reverse();
  console.log(digitsPair);
  const result = digitsPair.reduce((acc, pair) => {
      const [x, y] = pair;
      if (y !== 0) {
        acc.push(switcher(x, y, romanNumerals))
      }
    return acc;
  }, []);
  return result.flat().join('');
}

const num = 1750;


console.log(toRoman(num));

export default toRoman;