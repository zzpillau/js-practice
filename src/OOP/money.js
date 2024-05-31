// const locale = (4000).toLocaleString(undefined, { style: 'currency', currency: 'eur' });
// console.log(locale);


function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
}

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
}

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    }
  }
  const newValue = this.currency !== newCurrency ? this.value * rates[this.currency][newCurrency] : this.value;

  return new Money(newValue, newCurrency)
}

const money1 = new Money(100);
console.log(money1, 'money1');
// console.log(money1.exchangeTo('eur'), 1);
// const newMoney = money1.exchangeTo('usd')
// console.log(newMoney, 'newMoney');


// console.log(money1.exchangeTo('eur'), 2);
// console.log(money1.exchangeTo('eur'), 3);

// console.log(money1.exchangeTo('usd'));

Money.prototype.add = function add(money) { // money1 - переданные деньги 100 usd
  console.log(this.value); // 200
  console.log(this.currency); // eur - исходные
  console.log(money.value);
  console.log(money.currency);
  const convertedMoney = this.currency !== money.currency ? money.exchangeTo(this.currency) : money;
  console.log(convertedMoney, 'convertedMoney');

  return new Money(convertedMoney.value + this.value, this.currency)
}

const money2 = new Money(200, 'eur');
const money3 = money2.add(money1);
console.log(money3.getValue());
// const money4 = money3.add(money1);
// console.log(money4.getValue());

Money.prototype.format = function () {
  return (this.value).toLocaleString(undefined, { style: 'currency', currency: this.currency });
}

// const money5 = new Money(10000);
// console.log(money5.format());