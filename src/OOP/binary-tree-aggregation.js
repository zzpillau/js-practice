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

  #makeCollection() {
    const coll = []
    this.#prefixTraverse(this, (node) => {
      coll.push(node.key);
    })
    return coll;
  }

  getSum() {
    const newColl = this.#makeCollection()
    console.log(newColl);
    return newColl.reduce((acc, currentValue) => {
      return acc + currentValue
    }, 0);
  }

  getCount() {
    const newColl = this.#makeCollection()
    return newColl.length;
  }

  toArray() {
    return this.#makeCollection()
  }

  toString() {
    const newColl = this.#makeCollection()
    return `(${newColl.join(', ')})`
  }

  every(fn) {
    const newColl = this.#makeCollection();
    return newColl.every(fn)
  }

  some(fn) {
    const newColl = this.#makeCollection();
    return newColl.some(fn)
  }


}

const tree = new Node(9,
  new Node(4,
    new Node(8),
    new Node(6,
      new Node(3),
      new Node(7))),
  new Node(17,
    null,
    new Node(22,
      null,
      new Node(20))));


// console.log(tree);
// console.log(tree.prefixTraverse(tree, (node) => {
//   console.log(node.key)
// }));

// console.log(tree.makeCollection());
console.log(tree.getSum());
console.log(tree.getCount());
console.log(tree.toArray());
console.log(tree.toString());



// Реализуйте следующие методы в классе:

//     getCount() — возвращает количество узлов в дереве.
//     getSum() — возвращает сумму всех ключей дерева.
//     toArray() — возвращает одномерный массив содержащий все ключи.
//     toString() — возвращает строковое представление дерева.
//     every(fn) — проверяет, удовлетворяют ли все ключи дерева условию, заданному в передаваемой функции.
//     some(fn) - проверяет, удовлетворяет ли какой-либо ключ дерева условию, заданному в передаваемой функции.

// При обходе дерева нужно использовать порядок слева направо. То есть вначале обрабатываем ключ узла, затем ключ левого ребёнка, после чего ключ правого ребёнка.