const number = new Number(100);
console.log(number);
console.log(typeof number);

function getValue(value) {
  return this.value;
}

function Constructor(value) {
  this.value = value;
}

const newN = new Constructor(10);

Constructor.prototype.valueOf = function () {
  return typeof this.value === Number ? `value is ${this.value + 0}` : `value is ${this.value}`
}


const solution = (value) => {
  return new Constructor(value)
}
console.log(newN.valueOf());

console.log(solution(1) + ''); // 'Value is 1'
console.log(solution(10) + ''); // 'Value is 10'
console.log(solution('some value') + ''); // 'Value is some value'