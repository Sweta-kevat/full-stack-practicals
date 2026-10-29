
const express = require("express");
const app = express();

const PORT = 3000;

const apiRouter = require("./apiRouter");
const uiRoute = require("./public/view/view");

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api", apiRouter);
app.use("/page", uiRoute);

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
