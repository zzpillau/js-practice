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
    const newChild = new Tree(node, tree.getParent());
    this.children.set(newChild);
    const event = 'add';
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

tree.on('add', node => {
  console.log('add %s', node.getKey());
});

tree.addChild('example');
tree.addChild('test');


tree.on('remove', node => {
    console.log('remove %s', node.getKey());
  });


  tree.removeChild('test');

