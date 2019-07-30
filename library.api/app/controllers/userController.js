class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    
    async get(req, res) {
        try{
            const result = await this.userService.get();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }

    async getid(req, res) {
        try{
            const { id } = req.params;
            const result = await this.userService.getid(id);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
}

module.exports = UserController;