'use strict'

const mongoose = require('mongoose');

const consumptionSchema = mongoose.Schema({
    product: {
        type: String
    },
    price: {
        type: String
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Consumption', consumptionSchema);
