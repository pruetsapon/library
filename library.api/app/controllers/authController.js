class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    async auth(req, res) {
        try {
            const { body } = req;
            const result = await this.authService.auth(body);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
}

module.exports = AuthController;