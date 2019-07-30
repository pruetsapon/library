class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }

    async get(req, res) {
        try{
            const result = await this.bookService.get();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
    
    async getid(req, res) {
        try{
            const { id } = req.params;
            const result = await this.bookService.getid(id);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
    
    async create(req, res) {
        try {
            const { body } = req;
            const result = await this.bookService.create(body);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
    
    async update(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;
            const result = await this.bookService.update(id, body);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
    
    async delete(req, res) {
        try{
            const { id } = req.params;
            const result = await this.bookService.delete(id);
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
}

module.exports = BookController;