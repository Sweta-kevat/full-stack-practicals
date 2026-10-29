const express = require("express");
const router = express.Router();

// Get teacher information
router.get("/gettheinfo", (req, res) => {
    res.send("Teacher info");
});

// Save teacher information
router.post("/save", (req, res) => {
    res.send("Teacher info saved");
});

module.exports = router;