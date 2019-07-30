const serviceLocator = require('../helpers/service_locator');

serviceLocator.register('request', (serviceLocator) => {
  const Request = require('../helpers/request');
  
  return new Request();
});

serviceLocator.register('authController', (serviceLocator) => {
  const request = serviceLocator.get('request');
  const AuthController = require('../controllers/authController');

  return new AuthController(request);
});

serviceLocator.register('bookController', (serviceLocator) => {
  const request = serviceLocator.get('request');
  const BookController = require('../controllers/bookController');

  return new BookController(request);
});

serviceLocator.register('userController', (serviceLocator) => {
  const request = serviceLocator.get('request');
  const UserController = require('../controllers/userController');

  return new UserController(request);
});

module.exports = serviceLocator;