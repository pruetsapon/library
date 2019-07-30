class AuthController {
    constructor(request) {
        this.request = request;
    }

    async auth(req, res) {
        try {
            const result = await this.request.post(req);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
}

module.exports = AuthController;