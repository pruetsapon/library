class UserController {
    constructor(request) {
        this.request = request;
    }
    
    async get(req, res) {
        try{
            const result = await this.request.get(req);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }

    async getid(req, res) {
        try{
            const result = await this.request.get(req);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
}

module.exports = UserController;