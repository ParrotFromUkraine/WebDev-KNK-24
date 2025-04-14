const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const users = [];

app.post("/sign-up", (req, res) => {
  const { email, password } = req.body;

  // Validation checks
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password should be at least 8 characters long" });
  }

  // Check if user already exists
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // Create new user with hashed password
  const hashedPassword = encodePassword(password);
  users.push({ email, password: hashedPassword });

  res.status(201).json({ message: "User created successfully" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
