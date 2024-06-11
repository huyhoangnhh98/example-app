const express = require('express');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
  res.json({ message: 'Hello, this is JSON data!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});