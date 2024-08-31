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
    this.rstes[from][to] = value;
  }

  constructor(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }

  exchangeTo(newCurrency) {
    if (this.currency === newCurrency) {
      return new Money(this.value, this.currency)
    }

    const newValue = this.value * this.constructor.rates[this.currency][newCurrency];
    return new Money(newValue, newCurrency)
  };
}

