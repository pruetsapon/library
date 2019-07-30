const serviceLocator = require('../helpers/service_locator');

serviceLocator.register('mongoose', () => {
  return require('mongoose');
});

serviceLocator.register('authService', (serviceLocator) => {
  const mongoose = serviceLocator.get('mongoose');
  const AuthService = require('../sevices/authService');

  return new AuthService(mongoose);
});

serviceLocator.register('bookService', (serviceLocator) => {
  const mongoose = serviceLocator.get('mongoose');
  const BookService = require('../sevices/bookService');

  return new BookService(mongoose);
});

serviceLocator.register('userService', (serviceLocator) => {
  const mongoose = serviceLocator.get('mongoose');
  const UserService = require('../sevices/userService');

  return new UserService(mongoose);
});

serviceLocator.register('authController', (serviceLocator) => {
  const authService = serviceLocator.get('authService');
  const AuthController = require('../controllers/authController');

  return new AuthController(authService);
});

serviceLocator.register('bookController', (serviceLocator) => {
  const bookService = serviceLocator.get('bookService');
  const BookController = require('../controllers/bookController');

  return new BookController(bookService);
});

serviceLocator.register('userController', (serviceLocator) => {
  const userService = serviceLocator.get('userService');
  const UserController = require('../controllers/userController');

  return new UserController(userService);
});

module.exports = serviceLocator;