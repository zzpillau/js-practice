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
    if (!this.children.has(node)) {
      this.children.set(node, new Tree(node, this));
      this.emit('add', this.children.get(node));
    } else {
      throw new Error('Key already exists');
    }
  }

//   removeChild(node) {
//     if (this.children.get(node) === undefined) {
//         throw new Error('nothing to remove');
//     }
//     const event = 'remove';
//     this.emit(event, node);
//   }
};

const tree = new Tree('start');

tree.on('add', node => {
  console.log('add %s', node.getKey());
});

tree.addChild('example');


// tree.on('remove', node => {
//     console.log('remove %s', node.getKey());
//   });


//   tree.removeChild('test');

