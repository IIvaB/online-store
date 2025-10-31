const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Вказуємо, що папка frontend — статичні файли
app.use(express.static(path.join(__dirname, "../frontend")));

// Якщо користувач переходить на будь-який шлях — видаємо index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
