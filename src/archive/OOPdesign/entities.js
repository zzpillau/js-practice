class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  equals(user) {
    return this.id === user.id;
  }
}

const user1 = new User(2551, 'Tanya');
console.log(user1);
const user2 = new User(2551, 'Tanya');
console.log(user2);

const user3 = new User(1147, 'Tanya');
console.log(user3);

console.log(user1.id);
console.log(user2.id);

console.log(user1.equals(user2));
