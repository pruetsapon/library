const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const books = require('./routes/books');
const auth = require('./routes/auth');
const log = require('./helpers/logger');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api logger
app.use(log.logger());

// api routes
app.use('/', books);
app.use('/', auth);

// api error logger
app.use(log.errorLogger());

// start server
app.listen(4000, () => {
  console.log('Start server at port 4000.');
});

module.exports = app;