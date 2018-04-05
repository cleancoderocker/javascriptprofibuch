class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.randomNumber = Math.random();
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  getRandomNumber() {
    return this.randomNumber;
  }
}

const instance = new Singleton();
Object.freeze(instance);

module.exports = instance;
