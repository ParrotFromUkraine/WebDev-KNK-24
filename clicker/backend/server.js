const express = require("express");
const cors = require("cors");
const { encodePassword, generateToken } = require("./utils");
const app = express();
const port = 3000;

const users = [];

app.use(cors());
app.use(express.json());

app.post("/sign-up", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email і пароль абавязковыя" });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "Пароль павінен быць не менш за 8 сімвалаў" });
  }

  if (users.some((user) => user.email === email)) {
    return res
      .status(400)
      .json({ error: "Карыстальнік з такім email ужо існуе" });
  }

  const hashedPassword = encodePassword(password);
  users.push({ email, password: hashedPassword });

  return res.status(201).json({ message: "Рэгістрацыя паспяховая!" });
});

app.post("/sign-in", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email і пароль абавязковыя" });
  }

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(401).json({ error: "Карыстальнік не знойдзены" });
  }

  const hashedPassword = encodePassword(password);
  if (user.password !== hashedPassword) {
    return res.status(401).json({ error: "Няправільны пароль" });
  }

  const token = generateToken(email);
  return res.status(200).json({ token });
});

app.listen(port, () => {
  console.log(`Сервер працуе на http://localhost:${port}`);
});
