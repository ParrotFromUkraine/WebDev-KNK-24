const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const users = [];

app.post('/sign-up', (req, res) => {
  const { username, password } = req.body;

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'Користувач вже існує' });
  }

  users.push({ username, password });
  res.json({ message: 'Реєстрація успішна' });
});

// Авторизація
app.post('/sign-in', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Невірні дані' });
  }

  // Генеруємо фейковий токен (можна просто рядок)
  const token = `fake-token-${Date.now()}`;

  res.json({ message: 'Авторизація успішна', token });
});

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
