
const EventEmitter = require("events");
const emitter = new EventEmitter();

// 0 = OFF, 1 = ON
let lightBulb = 0;

// Display a message when hello is emitted
emitter.on("hello", () => {
    console.log("Hello");
});

// Turn the light ON
emitter.on("turnON", () => {
    if (lightBulb === 0) {
        lightBulb = 1;
        console.log("Light turned ON");
    } else {
        console.log("Light is already ON");
    }
});

// Turn the light OFF
emitter.on("turnOFF", () => {
    if (lightBulb === 1) {
        lightBulb = 0;
        console.log("Light turned OFF");
    } else {
        console.log("Light is already OFF");
    }
});

// Check the current light status
emitter.on("checkLight", () => {
    console.log("Light is", lightBulb ? "ON" : "OFF");
});

// Trigger the events
emitter.emit("hello");
emitter.emit("turnON");
emitter.emit("turnOFF");
emitter.emit("turnON");
emitter.emit("checkLight");
