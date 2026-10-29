const express = require("express");
const { sequelize } = require("./models");
const studentServices = require("./services/StudentServices");

const app = express();
const PORT = 3000;

app.use(express.json());

// Add a student
app.post("/studentDetails", studentServices.createStudent);

// Get all students
app.get("/studentDetails", studentServices.getAllStudents);

// Connect to database and start server
sequelize.sync()
    .then(() => {
        console.log("Database connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.log("Database connection failed:", error.message);
    });