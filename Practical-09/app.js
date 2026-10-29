
const fs = require("fs");

console.log("Start");
console.log(1);

// Non-blocking operation
fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

console.log(2);
console.log(3);
console.log(4);

// Blocking operation
const data = fs.readFileSync("./Plain.txt", "utf-8");

console.log(data);
console.log(5);
console.log("End");
