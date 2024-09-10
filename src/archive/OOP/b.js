export default class Node {
    constructor(key = null, left = null, right = null) {
      this.key = key;
      this.left = left;
      this.right = right;
    }

    #globals = {
      node: 0,
      left: [],
      right: [],
      count: 0,
      balanced: 0,
    }

    
reduce(fn, initialValue) {
  console.log('iteration>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

    let acc = fn(initialValue, this.key);
    this.#globals.node = this.key;

    console.log(this.key, this.#globals.left, this.#globals.right);
    
    const treshold = (this.left === null && this.right === null);


    if (treshold) {
      console.log('treshold!!!!!!!!!!!!!!!!!!!!!');
      
    }


    let lefts;
    if (this.left !== null) {
      lefts = this.left.reduce(fn, acc);

      this.#globals.count += 1;
      this.#globals.left = [...this.#globals.left, this.left.key]


    }
    let rights;
    if (this.right !== null) {
      rights = this.right.reduce(fn, acc);

      this.#globals.count += 1;
      this.#globals.right = [...this.#globals.right, this.right.key]

    }



    




    console.log(this.#globals);
    

    console.log(acc, 'acc?????????????????????????');
    
    const newAcc = [...acc, lefts, rights]
        

    return newAcc;
  }

  getCount() {
    
    return this.reduce((acc, key) => {

      console.log('method', [...acc, key]);
      


      return [...acc, key];

    }, []);
  }

}

const tree = new Node(8,
  new Node(5,
    new Node(4,
      new Node(1),
      new Node(3,
        new Node(2))),
    new Node(6)),
  new Node(12,
    new Node(10,
      null,
      new Node(11)),
    new Node(14)));

    console.log(tree.getCount(), '%%%'); // false




    class TreeNode {
      constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
      }
  }
  
  function isBalanced(root) {
      function checkHeight(node) {
          if (!node) return 0; // Высота пустого узла = 0
  
          const leftHeight = checkHeight(node.left);
          if (leftHeight === -1) return -1; // Левое поддерево не сбалансировано
  
          const rightHeight = checkHeight(node.right);
          if (rightHeight === -1) return -1; // Правое поддерево не сбалансировано
  
          // Проверяем, сбалансировано ли текущее поддерево
          if (Math.abs(leftHeight - rightHeight) > 1) {
              return -1; // Не сбалансировано
          }
  
          return Math.max(leftHeight, rightHeight) + 1; // Возвращаем высоту
      }
  
      return checkHeight(root) !== -1; // Если высота не -1, значит, дерево сбалансировано
  }
  
  // Пример использования
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log(isBalanced(root)); // true или false











  class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    isBalanced() {
        const checkHeight = (node) => {
            if (!node) return 0; // Высота пустого узла = 0

            const leftHeight = checkHeight(node.left);
            if (leftHeight === -1) return -1; // Левое поддерево не сбалансировано

            const rightHeight = checkHeight(node.right);
            if (rightHeight === -1) return -1; // Правое поддерево не сбалансировано

            // Проверяем, сбалансировано ли текущее поддерево (разница высот <= 2)
            if (Math.abs(leftHeight - rightHeight) > 2) {
                return -1; // Не сбалансировано
            }

            return Math.max(leftHeight, rightHeight) + 1; // Возвращаем высоту
        };

        return checkHeight(this) !== -1; // Проверяем сбалансированность для текущего узла
    }
}

// Пример использования
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(6);

console.log(root.isBalanced()); // true или false

  

class TreeNode {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }

  isBalanced() {
      const checkHeight = (node) => {
          if (!node) return 0; // Высота пустого узла = 0

          const leftHeight = checkHeight(node.left);
          if (leftHeight === -1) return -1; // Левое поддерево не сбалансировано

          const rightHeight = checkHeight(node.right);
          if (rightHeight === -1) return -1; // Правое поддерево не сбалансировано

          // Проверяем, сбалансировано ли текущее поддерево (разница высот <= 2)
          if (Math.abs(leftHeight - rightHeight) > 2) {
              return -1; // Не сбалансировано
          }

          return Math.max(leftHeight, rightHeight) + 1; // Возвращаем высоту
      };

      return checkHeight(this) !== -1; // Проверяем сбалансированность для текущего узла
  }
}

// Пример использования
const tree = new TreeNode(8,
  new TreeNode(5,
      new TreeNode(4,
          new TreeNode(1),
          new TreeNode(3,
              new TreeNode(2))),
      new TreeNode(6)),
  new TreeNode(12,
      new TreeNode(10,
          null,
          new TreeNode(11)),
      new TreeNode(14))
);

console.log(tree.isBalanced()); // true или false
