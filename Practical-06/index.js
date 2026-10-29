const express = require("express");
const app = express();

app.get("/student", (req, res) => {
    res.send("Student");
});

app.post("/save", (req, res) => {
    res.send("Student saved");
});

app.get("/get", (req, res) => {
    res.send("Student data");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});