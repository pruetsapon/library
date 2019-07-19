const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const errorHandler = require('./helpers/error-handler');
const permission = require('./helpers/permission');
const verify = require('./helpers/verify');

const books = require('./routes/bookRoute');
const auth = require('./routes/authRoute');
const users = require('./routes/userRoute');

const role = require('./common/role');

const mongoConfig = require('./config.json').mongodb;
mongoose.connect(mongoConfig.url, { useNewUrlParser: true });
mongoose.connection;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(verify());

// api routes
app.use('/api/v1', permission([role.admin, role.user]), books);
app.use('/api/v1', permission(role.admin), users);
app.use('/api/v1', auth);

// global error handler
app.use(errorHandler);

// start server
app.listen(3000, () => {
  console.log('Start server at port 3000.');
});

module.exports = app;