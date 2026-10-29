
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/students", (req, res) => {
  res.json([
    { id: 1, name: "Sweta", course: "BCA" },
    { id: 2, name: "Rahul", course: "BCA" },
    { id: 3, name: "Priya", course: "BCA" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Node.js server running at http://localhost:${PORT}`);
});
