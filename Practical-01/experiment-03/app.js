//EventEmitter for Doctor Appointment Booking

const EventEmitter = require("events");
const emitter = new EventEmitter();

// Doctor and appointment status: 0 = No, 1 = Yes
const doctor = { state: 0 };
const appointment = { state: 1 };

// Listen for the appointment event
emitter.on("takeAppointment", () => {
    if (doctor.state === 1) {
        console.log("Doctor is available");

        if (appointment.state === 1) {
            console.log("Appointment can be taken");
        } else {
            console.log("Appointment cannot be taken");
        }
    } else {
        console.log("Doctor is not available");
    }
});

// Trigger the event
emitter.emit("takeAppointment");
