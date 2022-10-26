const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Free 1337');
});

app.listen(5000, () => {
  console.log('Server listening on port 5000 🍯');
});
