class DoulbyLinkedListNode {
  constructor (value, previous, next) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

class DoulbyLinkedList {
  head = null;
  tail = null;

  insertBegin (value) {
    if (this.head == null) {
      const node = new DoulbyLinkedListNode(value, null, null);
      this.head = node;
      this.tail = node;
    } else {
      const node = new DoulbyLinkedListNode(value, null, this.head);
      this.head.previous = node;
      this.head = node;
    }
  }

  insertEnd (value) {
    if (this.tail == null) {
      const node = new DoulbyLinkedListNode(value, null, null);
      this.tail = node;
      this.head = node;
    } else {
      const node = new DoulbyLinkedListNode(value. this.tail, null);
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeBegin () {
    if (this.head == null) {
      return undefined;
    }

    const result = this.head.value;

    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    return result;
  }

  fore () {
    let iterator = {
      current: this.head,
    };
    
    iterator[Symbol.iterator] = function* () {
      while (this.current !== null) {
        yield this.current.value;

        this.current = this.current.next;
      }
    }

    return iterator;
  }
}


const sum = (items) => {
  let result = 0;

  for (const item of items) {
    result = result + item;
  }

  return result;
};


const list = new DoulbyLinkedList();
list.insertBegin(1);
list.insertBegin(2);
list.insertBegin(3);
list.insertBegin(4);

console.log(sum(list.fore()));
