import _ from 'lodash';

const isValidIPv6 = (address) => {
  const ip = address;

  if (ip === '::') {
    return true;
  }

  const splitIp = ip.split(':');
  console.log(splitIp);
  console.log(splitIp.length);

  const compact = _.compact(splitIp);
  console.log('compact', compact);

  console.log;

  const filtered = splitIp.filter((el) => el === '');

  // if (ip.startsWith(':') && !ip.startsWith('::')) {
  //   console.log(`if (ip.startsWith(':') && !ip.startsWith('::'))`);
  //   return false;
  // } // проверка на начало и конец с :

  // // сделать reduce! собирать filtered в аккумулятор

  // if (ip.endsWith(':')) {
  //   console.log(`ip.endsWith(':')`);
  //   return false;
  // } // проверка на начало и конец с :

  const reduce = compact.reduce((acc, el, i, arr) => {
    switch (true) {
      case ip.startsWith(':') && !ip.startsWith('::'):
      case ip.endsWith(':'):
      case filtered.length > 1:
      case splitIp.length > 8 || splitIp.length === 1:
      case el.length > 4:
      case !Number(`0x${el}`) && Number(`0x${el}`) !== 0:
        acc = 1;
    }
    return acc;
  }, 0);

  console.log(reduce);
  // const filt2 = splitIp.filter((el) => el.length > 4);
  // if (filt2.length > 0) {
  //   console.log(`el.length > 4`);
  //   return false;
  // }

  // const fil = splitIp.filter((el) => el === '');
  // if (fil.length > 1 && !ip.startsWith('::')) {
  //   console.log(`el === ''`);
  //   return false;
  // }

  // if (splitIp.length > 8 || splitIp.length === 1) {
  //   console.log(`splitIp.length > 8`);
  //   return false;
  // }

  // const filtered3 = compact.filter(
  //   (el) => !Number(`0x${el}`) && Number(`0x${el}`) !== 0,
  // );

  // console.log(filtered3);
  // проверка на 16-ричность

  return reduce > 0 ? false : true;
};

// console.log(isValidIPv6('10:d3:2d06:24:400c:5ee0:be:3d'));
console.log(isValidIPv6('::b36:3c:f0:7:937'));
