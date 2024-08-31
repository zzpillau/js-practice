class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  #prefixTraverse(node, callback) {
    if (!node) {
      return
    }
    callback(node);
    this.#prefixTraverse(node.left, callback);
    this.#prefixTraverse(node.right, callback);
  }

  callbackRecurs() {
    this.#prefixTraverse(this, (node) => {
      console.log(node.key);
    })
  }


}


const tree1 = new Node(4,
  new Node(3,
    new Node(2)));

console.log(tree1.callbackRecurs());

// console.log(tree1.isBalanced()); // true

const tree2 = new Node(4,
  new Node(3,
    new Node(2,
      new Node(1))));

console.log(tree2);

// console.log(tree2.isBalanced()); // false