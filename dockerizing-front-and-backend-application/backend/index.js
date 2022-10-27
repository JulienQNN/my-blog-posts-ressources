const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors({
    origin: ['http://localhost'],
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Free 1337');
});

app.listen(5000, () => {
  console.log('Server listening on port 5000 🍯');
});
