require('dotenv').config();
const express = require('express');
const server = express();
const bodyParser = require('body-parser');

const config = require('./app/configs/config');
const serviceLocator = require('./app/configs/di');
const log = require('./app/helpers/logger');
const routes = require('./app/routes/route');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// api logger
server.use(log.logger());

// api routes
routes.register(server, serviceLocator);

// api error logger
server.use(log.errorLogger());

// start server
server.listen(config.app.port, () => {
  console.log(`${config.app.name} Server is running on port - ${config.app.port}`);
});

module.exports = server;