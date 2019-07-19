const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const books = require('./routes/bookRoute');
const auth = require('./routes/authRoute');
const users = require('./routes/userRoute');
const log = require('./helpers/logger');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api logger
app.use(log.logger());

// api routes
app.use('/', books);
app.use('/', users);
app.use('/', auth);

// api error logger
app.use(log.errorLogger());

// start server
app.listen(4000, () => {
  console.log('Start server at port 4000.');
});

module.exports = app;