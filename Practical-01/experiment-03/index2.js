
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Create four light bulbs: 0 = OFF, 1 = ON
const bulbs = [
    { state: 0 },
    { state: 0 },
    { state: 1 },
    { state: 0 }
];

// Turn a selected bulb ON
emitter.on("turnON", (bulb, number) => {
    if (bulb.state === 0) {
        bulb.state = 1;
        console.log(`Bulb ${number} turned ON`);
    } else {
        console.log(`Bulb ${number} is already ON`);
    }
});

// Turn a selected bulb OFF
emitter.on("turnOFF", (bulb, number) => {
    if (bulb.state === 1) {
        bulb.state = 0;
        console.log(`Bulb ${number} turned OFF`);
    } else {
        console.log(`Bulb ${number} is already OFF`);
    }
});

// Check a selected bulb
emitter.on("checkLight", (bulb, number) => {
    console.log(`Bulb ${number} is ${bulb.state ? "ON" : "OFF"}`);
});

// Trigger events for different bulbs
emitter.emit("turnON", bulbs[0], 1);
emitter.emit("turnOFF", bulbs[2], 3);
emitter.emit("checkLight", bulbs[0], 1);
emitter.emit("checkLight", bulbs[2], 3);
