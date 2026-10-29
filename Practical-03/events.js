
const EventEmitter = require("events");

const myEvent = new EventEmitter();

// Listen for an event
myEvent.on("greet", () => {
    console.log("Hello! Event received.");
});

// Trigger the event
myEvent.emit("greet");
