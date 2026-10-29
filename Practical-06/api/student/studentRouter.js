const express = require("express");
const router = express.Router();

// Get student information
router.get("/gettheinfo", (req, res) => {
    res.send("Student info");
});

// Save student information
router.post("/save", (req, res) => {
    res.send("Student info saved");
});

module.exports = router;