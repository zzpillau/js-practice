
class Money {
  static rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    },
  }; 

  static setRate(from, to, value) {
    this.rates[from][to] = value;
  }

  constructor(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
    
  }

  exchangeTo(newCurrency) {
    if (this.currency === newCurrency) {
      return new Money(this.value, this.currency);
    }
    // this.constructor.rates находится в функции-конструкторе
    const newValue = this.value * this.constructor.rates[this.currency][newCurrency];
    return new Money(newValue, newCurrency);
  };

  // Другие методы
}




const money = new Money(100);

const money2 = money.exchangeTo('eur');
console.log(money2);

Money.setRate('usd', 'eur', 0.8)

const money3 = money.exchangeTo('eur');
console.log(money3);


console.log(Money.prototype.constructor); // вот тут можно посмотреть конструктор


