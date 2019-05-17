const express = require('express');
var app = express();

const db = require('../database/index.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = 3004;
app.listen(PORT, function() {
  console.log(`Listening in on port: ${PORT}`);
});

app.get('/players', function(req, res) {
  console.log('Sending request to DB');
  db.allPlayers((err, docs) => {
    if (err) {
      console.log('Error on the server');
      res.send(404);
      res.end();
    } else {
      console.log('Successful GET to DB from Server:', docs);
      res.end();
    }
  });
});
