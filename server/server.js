const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();

app.use(cors());

app.get('/inputs', (req, res) => {
  const TEST_QUERY = `SELECT Date FROM healthInputs.inputs WHERE Pain != 'none'`;
  connection.query(TEST_QUERY, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      res.send({ pain: response });
    }
  });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

