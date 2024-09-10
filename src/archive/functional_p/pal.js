// BEGIN (write your solution here)
const isPalindrome = (str) => {

  if (str.length === 1) {
    return true;
  }

  const firstChar = str[0];
  console.log('firstChar', firstChar);
  const lastChar = str[str.length - 1];
  console.log('lastChar', lastChar);

  if (firstChar !== lastChar) {
    return false;
  }

  const substr = str.substring(1, str.length - 1);
  console.log('substr', substr);

  return isPalindrome(substr);

}

export default isPalindrome;

console.log(isPalindrome('aa'));
console.log(isPalindrome('radar'));
// END
