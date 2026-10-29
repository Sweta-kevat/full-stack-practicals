//Topic: Creating a Basic Web Server and Handling Routes Using Node.js and Express.js

const express = require("express"); // Import Express
const app = express(); // Create the application

// Handle the /about route
app.get("/about", (req, res) => {
    res.send("About");
});

// Handle the /home route
app.get("/home", (req, res) => {
    res.send("Home");
});

// Handle the home page (/)
app.get("/", (req, res) => {
    res.send("Port 3000");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
