'use strict';

class Tree {
  constructor(value = null, parent = null) {
    this.left = null;
    this.right = null;
    this.parent = parent;
    this.value = value;
  }

  getKey() {
    return this.value;
  }

  getRight() {
    return this.right;
  }

  getLeft() {
    return this.left;
  }

  insert(value) {
    return this.insertNode(value, this)
  }

  insertNode(value, parent) {
    if (!parent.parent && !parent.value) {
      return parent.value = value;
    }
    if (value < parent.value) {
      if (parent.left === null) {
        parent.left = new Tree(value, parent)
      } else {
        this.insertNode(value, parent.left)
      }
    } else {
      if (value > parent.value) {
        if (parent.right === null) {
          parent.right = new Tree(value, parent)
        } else {
          this.insertNode(value, parent.right)
        }
      }
    }
  }
}


const tree = new Tree();
tree.insert(9);
tree.insert(17);
tree.insert(4);
tree.insert(3);
tree.insert(6);
tree.insert(22);
tree.insert(5);
tree.insert(7);
tree.insert(20);
tree.insert(4);
tree.insert(3);

console.log(1, tree.getKey()); // (9);

console.log(2, tree.getLeft().getKey()) // (4);

console.log(3, tree.getLeft().getLeft().getKey()) // (3);
console.log(4, tree.getLeft().getLeft().getLeft()) // Null();
console.log(5, tree.getLeft().getLeft().getRight()) // Null(); ERRRROR

console.log(6, tree.getLeft().getRight().getKey()) // (6);

console.log(7, tree.getLeft().getRight().getLeft().getKey()) // (5);
console.log(8, tree.getLeft().getRight().getLeft().getLeft()) // Null(); ERRRROR
console.log(9, tree.getLeft().getRight().getLeft().getRight()) // Null();

console.log(10, tree.getLeft().getRight().getRight().getKey()) // (7);
console.log(11, tree.getLeft().getRight().getRight().getLeft()) // Null();
console.log(12, tree.getLeft().getRight().getRight().getRight()) // Null();

console.log(13, tree.getRight().getKey()) // (17);
console.log(14, tree.getRight().getLeft()) // Null();

console.log(15, tree.getRight().getRight().getKey()) // (22);
console.log(16, tree.getRight().getRight().getRight()) // Null();

console.log(17, tree.getRight().getRight().getLeft().getKey()) // (20);
console.log(18, tree.getRight().getRight().getLeft().getLeft()) // Null();
console.log(20, tree.getRight().getRight().getLeft().getRight()) // Null();



// const tree = new Tree()
// // console.log(tree);

// tree.insert(9);
// tree.insert(17);
// tree.insert(4);
// tree.insert(3);
// tree.insert(6);
// console.log(tree);


// console.log(tree.getKey()); // 9
// console.log(tree.getLeft().getKey());; // 4
// console.log(tree.getRight().getKey());; // 17
// console.log(tree.getLeft().getLeft().getKey());; // 3
// console.log(tree.getLeft().getRight().getKey()); // 6
// console.log(tree.getLeft().getLeft().getLeft()); // null
// console.log(tree.getLeft().getLeft().getRight()); // null
// console.log(tree.getLeft().getLeft().getRight());
// console.log(tree.getLeft().getRight().getKey());