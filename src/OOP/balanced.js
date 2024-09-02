
class Node {
    constructor(key = null, left = null, right =  null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }

    #prefixTraverse(node, callback) {
        if (!node) {
          return;
        }
        callback(node);
        this.#prefixTraverse(node.left, callback);
        this.#prefixTraverse(node.right, callback);
      }


    method() {
        const stats = {

        }
        return this.#prefixTraverse(this, (node) => {
            !!node.key ? console.log(node.key) : console.log('unbelievable');
            ;
            !!node.left ? console.log('left.key', node.left.key) : console.log('left nope');
            ;
            !!node.right ? console.log('right.key', node.right.key) : console.log('right nope');


            (!node.left && !node.right) ? console.log('treshold!!!!!!!!!!!!!!!') : console.log('');
            ;
            

            console.log('iteration end_________________________________');
            

            
            
            // console.log([node.key, node.left, node.right])

        });
    }


}



const tree3 = new Node(9,
    new Node(4,
      new Node(3),
      new Node(6,
        new Node(5),
        new Node(7))),
    new Node(17,
      null,
      new Node(22,
        null,
        new Node(20))));

// tree3.isBalanced(); // true

// console.log(tree3);

console.log(tree3.method());





const tree1 = new Node(4,
    new Node(3,
      new Node(2)));
  
//   tree1.isBalanced(); // true
  
  const tree2 = new Node(4,
    new Node(3,
      new Node(2,
        new Node(1))));
  
//   tree2.isBalanced(); // false
  