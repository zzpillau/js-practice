function Money(value, currency = 'usd') {
    const rates = {
        usd: {
            eur: 0.7,
        },
        eur: {
            usd: 1.2,
        },
    }

    this.value = value, 
    this.currency = currency;
    this.rates = rates;
}

const money = new Money(100);

// console.log(money);

Money.prototype.getValue = function getValue() {
  return this.value;
}

// console.log(money.getValue());

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
}
  
// console.log(money.getCurrency());


Money.prototype.exchangeTo = function exchangeTo(currency) {
    const rate = this.rates[this.currency][currency];
    // console.log('rate', rate);
    
    const newValue = this.value * rate;
    // console.log(this.value);
     
    return new Money(newValue, currency);
}


const money1 = money.exchangeTo('eur');

// console.log('money1', money1);


const money2 = new Money(200, 'eur');

// console.log(money2.getValue());


Money.prototype.add = function add(money) {
    this.currency
    this.value
    const currency = money.getCurrency();
    const value = money.getValue();
    

    console.log(money.getValue());
    console.log(money.getCurrency());
    
    const sameCurrency = this.currency === currency;

    if (sameCurrency) {
        return new Money(this.value + value, this.currency)
    }

    const exchangedMoney = money.exchangeTo(this.currency);

    const newValue = exchangedMoney.getValue();

    return new Money(this.value + newValue, this.currency)

}


const money3 = money2.add(money);
console.log(money3);

const money4 = money3.add(money);
console.log(money4);


Money.prototype.format = function format() {
    return this.value.toLocaleString(undefined, {style: 'currency', currency: this.currency})
}

const money5 = new Money(1000);

console.log(money5.format());



console.log(Money.prototype);






