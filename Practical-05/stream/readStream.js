
const fs = require("fs");

const readStream = fs.createReadStream("abc.txt", "utf8");

readStream.on("data", (chunk) => {
    console.log("File content:", chunk);
});

readStream.on("end", () => {
    console.log("Reading completed");
});
