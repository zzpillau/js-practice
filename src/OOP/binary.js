class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }



  reduce(fn, initialValue) {
    let acc = fn(initialValue, this.key);

    if (this.left !== null) {
      acc = this.left.reduce(fn, acc);
    }
    if (this.right !== null) {
      acc = this.right.reduce(fn, acc);
    }

    return acc;
  }


  }



  prefixTraverse(node, callback) {
    if (!node) {
      return
    }
    callback(node);
    this.prefixTraverse(node.left, callback);
    this.prefixTraverse(node.right, callback);
  }

  callback(node, acc = {lefts: 0, rights: 0}) {

    
    if (node.left) {
      console.log(node.root, 'left');
      return acc.lefts += 1;
    } else {
      console.log(node.root, 'left null');
    };

    if (node.right) {
      console.log(node.root, 'right');
      return acc.rights += 1;

    } else {
      console.log(node.root, 'right null');

    };

    console.log(acc);

    return acc;
  }

  fn() {

    return this.prefixTraverse(this, this.callback)
    
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

// console.log(tree);

console.log(tree.getCountLefts());

