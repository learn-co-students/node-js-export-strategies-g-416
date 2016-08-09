const expect = require('chai').expect
const Lamp = require('../lib/lamp')
const powerLimits = require('../lib/power_limits');
const power = require('../lib/power');

describe('Lamp', function() {

  beforeEach(function() {
    return myLamp = new Lamp(20)
  });

  it('has a currentBrightness of 0 when it is instantiated', function(done) {
    expect(myLamp.currentBrightness).to.equal(0)
    done()
  })

  it('has a maxBrightness of 20 when it is instantiated', function(done) {
    expect(myLamp.maxBrightness).to.equal(20)
    done()
  })

  it('#turnOn() sets the currentBrightness to 50', function(done) {
    myLamp.turnOn()
    expect(myLamp.currentBrightness).to.equal(50)
    done()
  })

  it('#turnOff() sets the currentBrightness to 0', function(done) {
    myLamp.turnOff()
    expect(myLamp.currentBrightness).to.equal(0)
    done()
  })

  it('powerLimits has a type of "Lamp"', function(done) {
    expect(powerLimits.type).to.equal("Lamp")
    done()
  })

  it('power.outage() has a currentBrightness of 0', function(done) {
    power.outage(myLamp)
    expect(myLamp.currentBrightness).to.equal(0)
    done()
  })


})
