const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

// Custom middleware to log request details
app.use((req, res, next) => {
  const log = `Request Method: ${req.method}, Request URL: ${req.url}\n`;
  fs.appendFile("request.log", log, (err) => {
    if (err) console.error("Error logging request:", err);
  });
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.send("Hello, GET request!");
});

app.post("/", (req, res) => {
  res.send("Hello, POST request!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
