
const fs = require("fs");

const readStream = fs.createReadStream("../stream/abc.txt");
const writeStream = fs.createWriteStream("../stream/abc.txt.bak");

// Copy file content using pipe()
readStream.pipe(writeStream);

writeStream.on("finish", () => {
    console.log("File copied successfully using pipe");
});
