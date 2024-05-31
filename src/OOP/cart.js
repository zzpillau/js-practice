class Cart {

  items = []

  addItem(item, count) {
    const result = {
      item,
      count,
    }
    this.items.push(result);
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.reduce((acc, el) => {
      return acc + el.count;
    }, 0)
  }


  getCost() {
    return this.items.reduce((acc, el) => {
      return acc + el.item.price * el.count;
    }, 0)
  }
}

const cart = new Cart();
console.log(cart);
cart.addItem({ name: 'car', price: 3 }, 5)
cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart);
console.log(cart.getItems());
console.log(cart.getCost()); // 35
console.log(cart.getCount()); // 35

