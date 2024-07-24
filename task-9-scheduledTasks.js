const cron = require("node-cron");
const fs = require("fs");

cron.schedule("* * * * *", () => {
  const log = `Cron job executed at ${new Date().toISOString()}\n`;
  fs.appendFile("cron.log", log, (err) => {
    if (err) console.error("Error logging cron job:", err);
  });
  console.log("Cron job executed");
});
