
const express = require("express");
const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");

const {
    buyProspective,
    FillAdmissionform,
    submitAdmissionform,
    answerTheExam,
    AdmissionSuccessfull
} = require("./admissionProcess");

// 1. Create and handle an event
const emitter = new EventEmitter();

emitter.on("student", () => {
    console.log("Student event received");
});

emitter.emit("student");

// 2. Write Sweta to a file using a stream
const writeStream = fs.createWriteStream("data.txt");

writeStream.write("Sweta");
writeStream.end();

writeStream.on("finish", () => {
    console.log("Data written to file");

    // 3. Read the file using a stream
    const readStream = fs.createReadStream("data.txt", "utf8");

    readStream.on("data", (chunk) => {
        console.log("File content:", chunk);
    });
});

// 4. Display the HTML page
app = express();

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "index.html"));
});

// 5. Run admission tasks one after another
buyProspective()
    .then((data) => {
        console.log(data);
        return FillAdmissionform();
    })
    .then((data) => {
        console.log(data);
        return submitAdmissionform();
    })
    .then((data) => {
        console.log(data);
        return answerTheExam();
    })
    .then((data) => {
        console.log(data);
        return AdmissionSuccessfull();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// 6. Start the Express server
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
