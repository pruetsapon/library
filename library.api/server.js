require('dotenv').config();
const express = require('express');
const server = express();
const config = require('./app/configs/config');
const serviceLocator = require('./app/configs/di');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorHandler = require('./app/helpers/error_handler');
const verify = require('./app/middlewares/verify');
const routes = require('./app/routes/route');

const Database = require('./app/configs/database');
const mongoOption = { 
  useNewUrlParser: true,
  useFindAndModify: false 
};
new Database(config.mongo.port, config.mongo.host, config.mongo.name, mongoOption);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const corsOption = {
  origin: '*',
  optionsSuccessStatus: 200
};
server.use(cors(corsOption));

// use JWT auth to secure the api
server.use(verify());

// global error handler
server.use(errorHandler);

// api routes
routes.register(server, serviceLocator);

// start server
server.listen(config.app.port, () => {
  console.log(`${config.app.name} Server is running on port - ${config.app.port}`);
});

module.exports = server;