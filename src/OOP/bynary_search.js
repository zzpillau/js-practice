class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.right = right;
    this.left = left;
  }

  getKey() {
    return this.key;
  }

  getRight() {
    return this.right;
  }

  getLeft() {
    return this.left;
  }

  search(key) {

    const currentKey = this.getKey();
    const rightNode = this.getRight();
    const leftNode = this.getLeft();

    if (currentKey === null) {
      return null;
    }
    if (key === currentKey) {
      return this;

    }
    if (key < currentKey && rightNode) {
      return rightNode.search(key)
    }
    if (key > currentKey && leftNode) {
      return leftNode.search(key)
    }
    return null;
  }

}

const tree2 = new Node(9, new Node(4), new Node(17));

console.log(tree2);

console.log(tree2.getKey()) // (9);
console.log(tree2.getLeft().getKey()) // (4);
console.log(tree2.getRight().getKey()) // (17);


const tree = new Node(9,
  new Node(4,
    new Node(3),
    new Node(6,
      new Node(5),
      new Node(7))),
  new Node(17,
    null,
    new Node(22,
      new Node(20),
      null)));

console.log(tree);

// const node = tree.search(6);
// console.log(node);
// console.log(node.getKey()); // 6
// console.log(node.getLeft().getKey()); // 5
// console.log(node.getRight().getKey()); // 7

// console.log(tree.search(3).getLeft()); // null
// console.log(tree.search(35)); // null

