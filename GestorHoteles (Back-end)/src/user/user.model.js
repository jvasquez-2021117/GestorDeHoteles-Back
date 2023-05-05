'use strict'

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        upperCase: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('User', userSchema);
