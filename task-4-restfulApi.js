const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

// CREATE
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
});

// READ
app.get("/users", (req, res) => {
  res.send(users);
});

// UPDATE
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  users = users.map((user) => (user.id === id ? updatedUser : user));
  res.send(updatedUser);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
