class Node {
    constructor(key = null, left = null, right =  null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }

    #globalStats = {
        nodeDone: false,
        goingLeft: false,
        goingRight: false,
        leftDone: false,
        rightDone: false,
        left: [],
        right: [],
        balanced: 0,
    }

    #prefixTraverse(node, callback) {

      
        if (!node) {
            // console.log('NO NODE');
          return ;
        }

        // console.log(node.key);




        const stats = {
          root: this.key,
          rootLefts: 0,
          rootRights: 0,
      }

        this.#globalStats.nodeDone = false;

        callback(node);

          // console.log('GOING LEFT', node.key);

        this.#globalStats.goingLeft = true;

        const lefts = [this.#prefixTraverse(node.left, callback)];
        lefts

          // console.log('LEFT IS DONE', node.key);

        this.#globalStats.leftDone = true;
        this.#globalStats.goingLeft = false;




          // console.log('GOING RIGHT', node.key);

        this.#globalStats.goingRight = true;

        const rights = [this.#prefixTraverse(node.right, callback)];
        console.log(rights);
        

          // console.log('RIGHT IS DONE', node.key);

        this.#globalStats.rightDone = true;
        this.#globalStats.goingRight = false;


     
          // console.log('NODE IS DONE', node.key);

        this.#globalStats.nodeDone = true;


        // console.log(globalStats);


        

      }

      isBalanced() {


        this.#prefixTraverse(this, (acc = [], node) => {
          const newAcc = [...acc, node.key];
          
          return newAcc;
          

            
      })

      // console.log(this.#globalStats.left);
      // console.log(this.#globalStats.right);
      


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
  
      console.log(tree.isBalanced(), '%%%'); // false
  