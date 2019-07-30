const serviceLocator = require('../helpers/service_locator');

class Database {
    constructor(port, host, name, option) {
        this.mongoose = serviceLocator.get('mongoose');
        this.connect(port, host, name, option);
    }

    connect(port, host, name, option) {
        this.mongoose.Promise = global.Promise;
        this.mongoose.connect(`mongodb://${host}:${port}/${name}`, option);
        const {connection} = this.mongoose;
        connection.on('connected', () =>
            console.info('Database Connection was Successful')
        );
        connection.on('error', (err) =>
            console.info('Database Connection Failed' + err)
        );
        connection.on('disconnected', () =>
            console.info('Database Connection Disconnected')
        );
        process.on('SIGINT', () => {
            connection.close();
            console.info('Database Connection closed due to NodeJs process termination');
            process.exit(0);
        });
    
        require('../models/bookModel');
        require('../models/userModel');
    }
}

module.exports = Database;