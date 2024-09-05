
const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};



class Node {
    constructor(key = null, left = null, right =  null, parent = null ) {
        this.key = key;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }

    #prefixTraverse(node, callback) {
        if (!node) {
          return;
        }
        callback(node);
        this.#prefixTraverse(node.left, callback);
        this.#prefixTraverse(node.right, callback);
      }

      #once (fn) {
        let called = false;
      
        return (...args) => {
          if (called) return;
          called = true;
          fn(...args);
        };
      };
      


    isBalanced() {
        const stats = {
          balanced: true,
          balanceChange() {
            if (stats.balanced)
            stats.balanced = false;
          }

        }


        console.log(stats.balanced);
        this.#once(stats.balanceChange());
        console.log(stats.balanced);
        this.#once(stats.balanceChange());
        console.log(stats.balanced);

        const lefts = [];
        const rights = [];

 
         this.#prefixTraverse(this, (node) => {

          const treshold = !node.left && !node.right;

          //   !!node.key ? console.log(node.key) : console.log('unbelievable');
          //   node.left ? node.left.parent = node.key : null;
          //   node.right ? node.right.parent = node.key : null;
            
          //   !!node.left ? console.log('left.key of', node.key, '----', node.left.key, 'parent', node.left.parent) : console.log('left nope');
            
          //   if (node.left) {
          //     lefts.push(node.left.key)
          //   }

          //   !!node.right ? console.log('right.key of', node.key, '----', node.right.key, 'parent', node.right.parent) : console.log('right nope');

          //   if (node.right) {
          //     rights.push(node.right.key)
          //   }

            // treshold ? console.log('treshold!!!!!!!!!!!!!!!') : console.log('');

            //   // if (!balanced) {
            //   //   return false;
            //   // }
            
            // console.log(lefts, rights);
            // console.log(Math.abs(lefts.length - rights.length) <= 2);

            // const balanced = (Math.abs(lefts.length - rights.length) <= 2);


            // console.log('balanced??????????????????????????????', balanced);
            // console.log('iteration end_________________________________');
            // // console.log([node.key, node.left, node.right])

            // if (!balanced) {
            //   console.log('IM DONEIM DONEIM DONEIM DONEIM DONEIM DONEIM DONEIM DONEIM DONEIM DONEIM DONEIM DONEIM DONEIM DONE');
            //   stats.balanced = false;
            //  }
            //  if (!stats.balanced) {
            //   return false;
            // }
        });  
        // return stats.balanced;
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

    console.log(tree.isBalanced()); // false
