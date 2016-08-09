// lamp.js
class Lamp {
  constructor(maxBrightness) {
    this.currentBrightness = 0
    this.maxBrightness = maxBrightness
  }

  dim(amount) {
    amount = amount || 1

    this.currentBrightness -= amount

    if (this.currentBrightness < 0) {
       this.currentBrightness = 0;
    }
  }

  turnOn() {
    this.currentBrightness = 50
  }

  turnOff() {
    this.currentBrightness = 0
  }
}

module.exports = Lamp
