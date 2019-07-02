const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./helpers/error-handler');
const verify = require('./helpers/verify-jwt');
const books = require('./routes/books');
const auth = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

// use JWT auth to secure the api
app.use(verify());

// api routes
app.use('/', books);
app.use('/', auth);

// global error handler
app.use(errorHandler);

// start server
app.listen(3000, () => {
  console.log('Start server at port 3000.');
});

module.exports = app;