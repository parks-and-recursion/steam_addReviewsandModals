const express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = 3004;
app.listen(PORT, function () {
  console.log(`Listening in on port: ${PORT}`);
});
