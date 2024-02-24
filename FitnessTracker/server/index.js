const express = require('express');
//Henry Becker

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Bozo!')
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});