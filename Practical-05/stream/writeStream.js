
const fs = require("fs");

const writeStream = fs.createWriteStream("writeStream.txt");

writeStream.write("Hello Sweta!\n");
writeStream.write("This is Node.js Write Stream.\n");

writeStream.end();

writeStream.on("finish", () => {
    console.log("Writing completed");
});
