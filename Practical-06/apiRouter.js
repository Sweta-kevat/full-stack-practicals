const express = require("express");
const router = express.Router();

const teacherRouter = require("./api/teacher/teacherRouter");
const studentRouter = require("./api/student/studentRouter");

// Main API route
router.get("/", (req, res) => {
    res.send("API called");
});

// Connect student and teacher routes
router.use("/student", studentRouter);
router.use("/teacher", teacherRouter);

module.exports = router;