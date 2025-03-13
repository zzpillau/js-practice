class Mobilescreen {
  constructor() {
    this.states = {
      powerOff: PowerOffState,
      screenDisabled: ScreenDisabledState,
      screenOn: ScreenOnState,
    };
    // init state
    this.state = new this.states.powerOff(this);
  }

  powerOn() {
    this.state = new this.states.screenDisabled(this);
  }

  touch() {
    this.state.touch();
  }

  swipe() {
    this.state.swipe();
  }

  notify(message) {
    console.log(message);
  }
}

class PowerOffState {
  constructor(screen) {
    this.screen = screen;
  }

  touch() {

  }

  swipe() {

  }
}

class ScreenDisabledState {
  constructor(screen) {
    this.screen = screen;
  }

  touch() {
    this.screen.state = new this.screen.states.screenOn(this.screen);
    this.screen.notify('touch ScreenDisabledState');
  }

  swipe() {

  }
}

class ScreenOnState {
  constructor(screen) {
    this.screen = screen;
  }

  touch() {
    this.screen.notify('touch ScreenOnState');
  }

  swipe() {
    this.screen.notify('swipe ScreenOnState');
  }
}

const screen = new Mobilescreen();
console.log(screen);
console.log();

screen.powerOn();
console.log(screen);

screen.touch();
screen.swipe();
screen.touch();
