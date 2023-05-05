'use strict'

const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    address: {
        type: String
    },
    qualification: {
        type: String
    },
    rooms: [{
        room: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        }
    }]
}, {
    versionKey: false
});

module.exports = mongoose.model('Hotel', hotelSchema);
