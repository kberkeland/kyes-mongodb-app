const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl, { useNewUrlParser: true });

mongoose.connection.once('connect', () => {
    console.log(`Mongoose connected to: ${databaseUrl}`);
});

mongoose.connection.on('error', () => {
    console.log(`Connect to database error: ${error}`);
});

module.exports = mongoose;