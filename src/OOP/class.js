class Company {
    employees = [];

    getEmployees() {
        return this.employees;
    }
}

const comp = new Company();
console.log(comp.getEmployees());

class Cart {
    items = [];

    getItems() {
        return this.items;
    }

    addItem(item, count) {
        this.items.push({ item, count })
    }

    getCount() {
        return this.items.reduce((prevAcc, good) => {
            const { count } = good;
            return count + prevAcc;
        }, 0)
    }

    getCost() {
        return this.items.reduce((prevAcc, good) => {
            const { price } = good.item;
            const { count } = good;
            return price * count + prevAcc;
        }, 0)
    }
}


const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35
cart.getItems();
// [
//   { item: { name: 'car', price: 3 }, count: 5 },
//   { item: { name: 'house', price: 10 }, count: 2 },
// ]
console.log(cart.getItems());
console.log(cart.getCost());
console.log(cart.getItems().length);


