'use strict'

const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
    description: {
        type: String
    },
    price: {
        type: String
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('AditionalServices', servicesSchema);