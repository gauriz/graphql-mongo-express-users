"use strict";
exports.__esModule = true;
exports.usersSchema = void 0;
var mongoose = require('mongoose');
exports.usersSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    location: {
        type: String
    }
});
