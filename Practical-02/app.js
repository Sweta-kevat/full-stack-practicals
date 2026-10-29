
const express = require("express");
const fs = require("fs");
const { SimpleInterest, CompoundInterest } = require("./math");

const app = express();

// Simple Interest route
app.get("/SimpleInterest", (req, res) => {
    const { Amount, ROI, Time } = req.query;

    const SI = SimpleInterest(Number(Amount), Number(ROI), Number(Time));

    fs.appendFileSync("data.txt", "Simple Interest: " + SI + "\n");

    res.send("Simple Interest = " + SI);
});

// Compound Interest route
app.get("/CompoundInterest", (req, res) => {
    const { P, ROI, N, Time } = req.query;

    const CI = CompoundInterest(Number(P), Number(ROI), Number(N), Number(Time));

    fs.appendFileSync("data.txt", "Compound Interest: " + CI + "\n");

    res.send("Compound Interest = " + CI);
});

// Start the server
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
