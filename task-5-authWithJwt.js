const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

app.use(express.json());

const SECRET_KEY = "your_secret_key";

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login route to generate JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Validate user credentials (for demo purposes, accepting any username/password)
  const user = { name: username };

  const token = jwt.sign(user, SECRET_KEY);
  res.json({ token });
});

// Protected route
app.get("/protected", authenticateToken, (req, res) => {
  res.send("This is a protected route");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
