class Driving {
  constructor(locations) {
    this.locations = locations;
    this.currentLocationIndex = 0;
  }

  go() {
    if (this.currentLocationIndex + 2 < this.locations.length) {
      this.currentLocationIndex += 2;
      const step = this.locations[this.currentLocationIndex];
      return step;
    }
    return null;
  }
}

// BEGIN (write your solution here)
const mapping = {
  walking: (locations) => new Walking(locations),
  driving: (locations) => new Driving(locations),
};

class Navigator {
  constructor(locations, mode = 'walking') {
    this.locations = locations;
    this.mode = mode;
    this.navigatorInstance = mapping[this.mode](this.locations);
  }

  goToNextTurn() {
    return this.navigatorInstance.go();
  }
}
// END

class Walking {
  constructor(locations) {
    this.locations = locations;
    this.currentLocationIndex = 0;
  }

  go() {
    if (this.currentLocationIndex + 1 < this.locations.length) {
      this.currentLocationIndex += 1;
      const step = this.locations[this.currentLocationIndex];
      return step;
    }
    return null;
  }
}

const navigator = new Navigator(['street1', 'street2', 'street3', 'street4', 'street5']);
// const navigator = new Navigator(['street1', 'street2', 'street3', 'street4', 'street5'], 'driving');

console.log(navigator.goToNextTurn()); // => 'street2'
console.log(navigator.goToNextTurn());
console.log(navigator.goToNextTurn());
console.log(navigator.goToNextTurn());
console.log(navigator.goToNextTurn())

; // => 'street3'
navigator.goToNextTurn(); // => 'street4'
navigator.goToNextTurn(); // => 'street5'
navigator.goToNextTurn(); // => null
