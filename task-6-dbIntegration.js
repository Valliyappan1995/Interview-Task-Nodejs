const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// CREATE
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

// READ
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(user);
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
