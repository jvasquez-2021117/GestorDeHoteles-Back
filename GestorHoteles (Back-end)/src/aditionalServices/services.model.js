'use strict'

const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('AditionalServices', servicesSchema);