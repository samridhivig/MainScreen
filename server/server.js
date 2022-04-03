const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();

app.use(cors());

app.get('/inputs', (req, res) => {
  let queries = [
    `SELECT Date FROM healthInputs.inputs WHERE Pain != 'none'`,
    `SELECT Date FROM healthInputs.inputs WHERE Fatigue != 'none'`,
    `SELECT Date FROM healthInputs.inputs WHERE Mood = 'highPos' OR Mood = 'medPos'`,
    `SELECT Date FROM healthInputs.inputs WHERE Mood = 'highNeg' OR Mood = 'medNeg'`,
    `SELECT Date FROM healthInputs.inputs WHERE Pain != 'none' AND Fatigue != 'none'`,
    `SELECT Date FROM healthInputs.inputs WHERE Mood = 'highPos' OR Mood = 'medPos' AND Fatigue != 'none'`,
    `SELECT Date FROM healthInputs.inputs WHERE Mood = 'highPos' OR Mood = 'medPos' AND Pain != 'none'`,
  ];

  connection.query(queries.join(';'), (error, response) => {
    if (error) {
      console.log(error);
    } else {
      res.send({ 
        pain: response[0],
        fatigue: response[1],
        positive: response[2],
        negative: response[3],
        fatiguePain: response[4],
        posFatigue: response[5],
        posPain: response[6],
      });
    }
  });
});

app.get('/aggregatedInputs', (req, res) => {
  let queries = [
    `SELECT Date FROM healthInputs.inputs WHERE Mood = 'highNeg' OR Mood = 'medNeg' AND Fatigue != 'none'`
    `SELECT Date FROM healthInputs.inputs WHERE Mood = 'highNeg' OR Mood = 'medNeg' AND Pain != 'none'`,
    `SELECT Date FROM healthInputs.inputs WHERE Mood = 'highPos' OR Mood = 'medPos' AND Fatigue != 'none' AND Pain != 'none'`,
    `SELECT Date FROM healthInputs.inputs WHERE Mood = 'highNeg' and Mood = 'medNeg' AND Fatigue != 'none' AND Pain != 'none'`
  ];

  connection.query(queries.join(';'), (error, response) => {
    if (error) {
      console.log(error);
    } else {
      res.send({ 
        negFatigue: response[0],
        negPain: response[1],
        posFatiguePain: response[2],
        negFatiguePain: response[3]
      });
    }
  });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

