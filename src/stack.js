const makeStack = () => {
  const stack = [];
  return {
    isEmpty: () => stack.length === 0,
    push: (item) => stack.push(item),
    pop: () => {
      if (stack.length === 0) throw new Error('Stack is empty!');
      return stack.pop();
    },
  };
};

export default makeStack;

// ИЗУЧИТЬ ЭТУ ФУНКЦИЮ!!!!!

// https://ru.hexlet.io/courses/js-testing/lessons/unit-tests/exercise_unit тут такой же принцип
