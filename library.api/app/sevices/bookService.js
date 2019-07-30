class BookService {
    constructor(mongoose) {
        this.mongoose = mongoose;
        this.Book = this.mongoose.model('Book');
    }

    async get() {
        return await this.Book.find();
    }

    async getid(id) {
        return await this.Book.findOne({bookId: id});
    }

    async create(data) {
        let book = new this.Book(data);
        return await book.save();
    }

    async update(id, data) {
        return await this.Book.findOneAndUpdate({bookId: id}, data);
    }

    async delete(id) {
        return await this.Book.deleteOne({bookId: id});
    }
}

module.exports = BookService;