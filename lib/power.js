// power.js
module.exports = {
  outage,
  surge
}

function outage(device) {
  device.currentBrightness = device.maxBrightness = 0;

  console.log(`Uh-oh, ${device}'s power is out. Try turning it on and checking its \`currentBrightness\`.`);
};

function surge(device) {
  if (device.currentBrightness > 0) {
    device.currentBrightness = device.maxBrightness * 10;

    console.log(`${device.constructor.name} is surging! Current brightness: ${device.currentBrightness}`);
  }
};
