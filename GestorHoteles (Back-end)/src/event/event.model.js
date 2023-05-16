'use strict'

const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    eventType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventType',
        required: true
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Event', eventSchema);
