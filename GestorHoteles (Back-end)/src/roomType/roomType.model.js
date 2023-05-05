'use strict'

const mongoose = require('mongoose');

const roomTypeSchema = mongoose.Schema({
    description: {
        type: String
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('RoomType', roomTypeSchema);
