const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const port = 3000;

app.use(express.json());

app.post(
  "/users",
  [body("name").isString(), body("age").isInt({ min: 0 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = req.body;
    // Save user to database (simulated here with a response)
    res.status(201).send(user);
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
