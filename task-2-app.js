const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, GET request!");
});

app.post("/", (req, res) => {
  res.send("Hello, POST request!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
