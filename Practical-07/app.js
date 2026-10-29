
const cron = require("node-cron");

// Run this task every minute
cron.schedule("* * * * *", () => {
    console.log("Hello Sweta!", new Date());
});

console.log("Cron job started");
