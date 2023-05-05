'use strict'

const mongoose = require('mongoose');

const eventTypeSchema = mongoose.Schema({
    description: {
        type: String
    }

}, {
    versionKey: false
});

module.exports = mongoose.model('EventType', eventTypeSchema);
