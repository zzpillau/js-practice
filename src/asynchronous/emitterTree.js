import EventEmitter from 'events';

class Tree extends EventEmitter {
  constructor(key, parent) {
    super();
    this.parent = parent;
    this.key = key;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getParent() {
    return this.parent;
  }

  addChild(node) {
    
    const newChild = new Tree(node, this.getKey());

    this.children.set(this.children, this.newChild);
    const event = 'add';

    // console.log(newChild.getParent(), '!!!!!!!!!!!!!!!!!!!!!!!!!');
    // console.log(this.children.has(newChild));
    
  
    this.emit(event, newChild);
    return newChild;
  }

  removeChild(node) {
    if (this.children.get(node) === undefined) {
        throw new Error('nothing to remove');
    }
    const event = 'remove';
    this.emit(event, node);
  }
};

const tree = new Tree('start');
console.log()
console.log(tree.getKey());

tree.on('add', node => {
  console.log('add %s', node.getKey());
});

tree.addChild('example');
tree.addChild('test');
console.log(tree.children.has('test'));



// tree.on('remove', node => {
//     console.log('remove %s', node.getKey());
//   });


//   tree.removeChild('test');

