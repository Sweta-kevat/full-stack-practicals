
const express = require("express");
const fs = require("fs");

const app = express();

// Write data into app.txt
fs.writeFileSync("app.txt", "Welcome to Practical 5");

// Display student details
app.get("/details", (req, res) => {
    const { id, name, rollno } = req.query;

    res.json({
        id: id,
        name: name,
        rollno: rollno
    });
});

// Print a star pattern
for (let i = 5; i > 0; i--) {
    let str = "";

    for (let j = i; j > 0; j--) {
        str += " * ";
    }

    console.log(str);
}

// Start server
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
