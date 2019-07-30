class UserService {
    constructor(mongoose) {
        this.mongoose = mongoose;
        this.User = this.mongoose.model('User');
    }

    async get() {
        return await this.User.find();
    }

    async getid(id) {
        return await this.User.findOne({userId: id});
    }
}

module.exports = UserService;