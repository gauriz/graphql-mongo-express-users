const mongoose = require('mongoose');
const { usersSchema } = require('../models/users.model.js');
require('dotenv').config();
const env = process.env;

/**
 * Mongoose Connection
**/

console.log(env.dbString);
mongoose.connect(env.dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Users = mongoose.model('Users', usersSchema);
module.exports = Users;