
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Four bulbs: 0 = OFF, 1 = ON
const bulb1 = { state: 0 };
const bulb2 = { state: 1 };
const bulb3 = { state: 0 };
const bulb4 = { state: 1 };

// Function to turn a bulb OFF
function turnOff(bulb, number) {
    bulb.state = 0;
    console.log(`Bulb ${number} is OFF`);
}

// Listen for the turnOFF event
emitter.on("turnOFF", (bulb, number) => {
    turnOff(bulb, number);
});

// Turn OFF all four bulbs
emitter.emit("turnOFF", bulb1, 1);
emitter.emit("turnOFF", bulb2, 2);
emitter.emit("turnOFF", bulb3, 3);
emitter.emit("turnOFF", bulb4, 4);
