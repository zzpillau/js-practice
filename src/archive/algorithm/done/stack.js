import LinkedList from '../linkedList.js';


// class Stack {
//   items = [];

//   push(value) {
//     this.items.push(value);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   isEmpty() {
//     return this.items.length == 0;
//   }
// }

// let stack = new Stack();

// const expression = '3 2 + 4 5 + *';
// const lexems = expression.split(' ');

// for (const lexem of lexems) {
//   let a;
//   let b;

//   switch (lexem) {
//     case '+':
//       b = stack.pop();
//       a = stack.pop();
//       stack.push(a + b);
//       break;

//     case '-':
//       b = stack.pop();
//       a = stack.pop();
//       stack.push(a - b);
//       break;
    
//     case '*':
//       b = stack.pop();
//       a = stack.pop();
//       stack.push(a * b);
//       break;

//     case '/':
//       b = stack.pop();
//       a = stack.pop();
//       stack.push(a / b);
//       break;
    
//     default:
//       stack.push(parseFloat(lexem));
//   }
// }

// console.log(stack);



class Stack {
  items = new LinkedList();

  push(value) {
    this.items.add(value);
  }

  pop() {
    return this.items.remove()
  }

  isEmpty() {
    return this.items.head == null;
  }
}

const normalizeString = (str) => {
  const lexems = str.split('');
  console.log(lexems);

  const stack = [];

  for (const lexem of lexems) {
    if (lexem === '#') {
      stack.pop();
    } else {
      stack.push(lexem);
    }
  }

  return stack.join('');
}

const solution = (str1, str2) => {
  const normStr1 = normalizeString(str1);
  const normStr2 = normalizeString(str2);

  return normStr1 === normStr2;

}

console.log(normalizeString('ab#c'));


console.log(solution('ab#c', 'ab#c'));




