'use strict'

const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    eventType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventType'
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Event', eventSchema);
