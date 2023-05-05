'use strict'

const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    nit: {
        type: String
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    description: {
        type: String
    },
    roomPrice: {
        type: Number
    },
    services: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AditionalServices'
    },
    consumption: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consumption'
    },
    total: {
        type: Number
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Bill', billSchema);
