module.exports.register = (server, serviceLocator) => {
    server.route('/auth').post(
        (req, res, next) =>
            serviceLocator.get('authController').auth(req, res, next)
    );
    
    server.route('/users').get(
        (req, res, next) =>
            serviceLocator.get('userController').get(req, res, next)
    );

    server.route('/user/:id').get(
        (req, res, next) =>
            serviceLocator.get('userController').getid(req, res, next)
    );

    server.route('/book').post(
        (req, res, next) =>
            serviceLocator.get('bookController').create(req, res, next)
    );

    server.route('/books').get(
        (req, res, next) =>
            serviceLocator.get('bookController').get(req, res, next)
    );

    server.route('/book/:id')
        .delete(
            (req, res, next) =>
                serviceLocator.get('bookController').delete(req, res, next)
        ).put(
            (req, res, next) =>
                serviceLocator.get('bookController').update(req, res, next)
        ).get(
            (req, res, next) =>
                serviceLocator.get('bookController').getid(req, res, next)
        );
};