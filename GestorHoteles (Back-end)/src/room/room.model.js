'use strict'

const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    noGuest:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    roomType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RoomType',
        required: true
    }
},{
    versionKey: false
});

module.exports = mongoose.model('Room', roomSchema);