const Lamp = require('./lamp');
const powerStuff = require('./power');
const powerLimits = require('./power_limits');

const myLamp = new Lamp(powerLimits.maxBrightness);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);

powerStuff.surge(myLamp);
powerStuff.outage(myLamp);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);
