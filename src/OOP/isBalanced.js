// разбираем решение учителя


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

  callback2(node) {

    rightCount: 0,
    leftCount: 0,
  }


    if (node.right) {
      // console.log('node.right is HERE!', node.right);
      return 1;
    }
    if (node.left) {
      // console.log('node.left is HERE!', node.left);
      return 1;
    }
    return 0; // значение для каждого нода

    // res.lefts += nodeInfo.leftCount;
    // res.rights += nodeInfo.rightCount;

    // console.log(res);


  }

  fn() {

    const nodeInfo = {
      balanced: true,
      keyCount: 0,
      rightCount: 0,
      leftCount: 0,
    }


    nodeInfo.keyCount += 1;

    this.#prefixTraverse(this, this.callback2);
    return nodeInfo;

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

console.log(tree.fn());
// console.log(tree3);


// const binary_node = new Node;
// console.log(binary_node);


// const tree = new Node(9,
//   new Node(4,
//     new Node(3),
//     new Node(6,
//       new Node(5),
//       new Node(7))),
//   new Node(17,
//     null,
//     new Node(22,
//       null,
//       new Node(20))));



// // console.log(tree.getCount());
// console.log(tree.isBalanced());

// const tree1 = new Node(4,
//   new Node(3,
//     new Node(2)));

// console.log(tree1.isBalanced()); // true

// const tree2 = new Node(4,
//   new Node(3,
//     new Node(2,
//       new Node(1))));

// console.log(tree2.isBalanced()); // false





// @ts-check

class Node2 {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  // BEGIN (write your solution here)

  #prefixTraverse(node, callback) {
    if (!node) {
      return
    }
    callback(node);
    this.#prefixTraverse(node.left, callback);
    this.#prefixTraverse(node.right, callback);
  }


  isBalanced() {
    let leftCount = 0;
    let rightCount = 0;
    let isBalanced = true;
    this.#prefixTraverse(this, (node) => {
      if (Math.abs(leftCount - rightCount) > 2) {
        isBalanced = false;
      }
      if (node.left) {
        leftCount += 1;
      }
      if (node.right) {
        rightCount += 1;
      }
    })
    return isBalanced;
  }

  // END
}
