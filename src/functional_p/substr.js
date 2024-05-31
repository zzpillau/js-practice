

const substr = (str, start = 0, length = str.length) => {

  if (start > str.length || length === 0) {
    return '';
  }

  const normalizeStart = () => {
    return start < 0 ? 0 : start
  }

  const normalizeLength = () => {
    if (length < 0) {
      return 1;
    }
    const tooLongSubsrt = (start + length - 1) > str.length;
    if (tooLongSubsrt) {
      return str.length;
    }
    return length;
  }

  const normalizedLength = normalizeLength();
  const normalizedStart = normalizeStart();
  // console.log(normalizedStart);
  // console.log(normalizedLength);

  const normStr = [...str];
  // console.log(normStr);
  const result = normStr.reduce((acc, el, i) => {
    console.log(i);
    console.log(el);
    console.log(i >= normalizedStart && i <= normalizedLength);
    if (i >= normalizedStart && i <= normalizedLength) {
      return `${acc}${el}`
    }
    return `${acc}${''}`
  }, '')



}

// console.log(substr('abba', 0, 1));    // a
console.log(substr('abba', 1, 2));    // bb
// console.log(substr('abba', -10, 2));  // ab
// console.log(substr('abba', -1, 100)); // abba
// console.log(substr('abba', -1, -1)); // a
console.log(substr('abba', 1, -10));  // b !!!!!!!!!!!!!
// console.log(substr('abba', 1, 10));   // bba
// console.log(substr('abba', 1, 0));    // ''
// console.log(substr('abba', 100, 3));  // ''