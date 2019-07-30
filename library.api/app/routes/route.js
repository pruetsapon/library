const role = require('../common/role');
const permission = require('../helpers/permission');

module.exports.register = (server, serviceLocator) => {
    server.route('/auth').post(
        (req, res, next) =>
            serviceLocator.get('authController').auth(req, res, next)
    );
    
    server.route('/users').get(
        permission(role.admin)
        ,(req, res, next) =>
            serviceLocator.get('userController').get(req, res, next)
    );

    server.route('/user/:id').get(
        permission(role.admin)
        ,(req, res, next) =>
            serviceLocator.get('userController').getid(req, res, next)
    );

    server.route('/book').post(
        permission(role.user)
        ,(req, res, next) =>
            serviceLocator.get('bookController').create(req, res, next)
    );

    server.route('/books').get(
        permission(role.user)
        ,(req, res, next) =>
            serviceLocator.get('bookController').get(req, res, next)
    );

    server.route('/book/:id')
        .delete(
            permission(role.user)
            ,(req, res, next) =>
                serviceLocator.get('bookController').delete(req, res, next)
        ).put(
            permission(role.user)
            ,(req, res, next) =>
                serviceLocator.get('bookController').update(req, res, next)
        ).get(
            permission(role.user)
            ,(req, res, next) =>
                serviceLocator.get('bookController').getid(req, res, next)
        );
};