const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const books = require('./routes/books');
const auth = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api routes
app.use('/', books);
app.use('/', auth);

// start server
app.listen(4000, () => {
  console.log('Start server at port 4000.');
});

module.exports = app;