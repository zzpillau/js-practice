function make(numer, denom) {
  return {
    numer: numer,
    denom: denom,
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    setNumer(numer) {
      return this.numer = numer;
    },
    setDenom(denom) {
      return this.denom = denom;
    },
    toString() {
      return `${this.numer}/${this.denom}`
    },
    add(obj) {
      return {
        numer: (this.numer * obj.getDenom() + this.denom * obj.getNumer()),
        denom: (this.denom * obj.getDenom()),
        getNumer() {
          return this.numer;
        },
        getDenom() {
          return this.denom;
        },
      }
    }
  }
}

const rat1 = make(3, 8);
console.log(rat1.getNumer());
console.log(rat1.getDenom());
console.log(rat1.toString());

const rat2 = make();
rat2.setNumer(10);
rat2.setDenom(3);
console.log(rat2.getNumer());
console.log(rat2.getDenom());

const result = rat1.add(rat2);
console.log(result);
console.log(result.getNumer());
console.log(result.getDenom());
