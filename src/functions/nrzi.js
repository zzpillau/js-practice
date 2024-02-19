
const nrzi = (signal) => {
  const arrSignal = [...signal];

  const stack = []

  const reduced = arrSignal.reduce((acc, bit) => {

    if (bit === '|') {
      stack.push(1)
    }
    if (stack.length === 0) {
      acc.push(0)
    }

    if (stack.length !== 0 && bit !== '|') {
    acc.push(stack.pop())
    }

    return acc;
  }, [])
  return reduced;
}

const signal1 = '_|¯|____|¯|__|¯¯¯';
console.log(nrzi(signal1)); // '011000110100'










// const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';

// console.log(nrzi(signal2)); // '110010000100111'



// const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';

// console.log(nrzi(signal3)); // '010010000100111'


