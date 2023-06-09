const express = require('express');
const data = require('./db.json');

const app = express();

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

app.get('/api', (req, res) => {
  res.json(data);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
