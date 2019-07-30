class BookController {
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
    
    async create(req, res) {
        try {
            const result = await this.request.post(req);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
    
    async update(req, res) {
        try {
            const result = await this.request.put(req);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
    
    async delete(req, res) {
        try{
            const result = await this.request.delete(req);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
}

module.exports = BookController;