const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var books = require('./routes/books');

app.use('/', books);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Start server at port 3000.');
});