const express = require("express");
const path = require("path");

const uiRoute = express.Router();

uiRoute.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../UI/index.html"));
});

module.exports = uiRoute;