'use strict'

const mongoose = require('mongoose');

const eventTypeSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    }

}, {
    versionKey: false
});

module.exports = mongoose.model('EventType', eventTypeSchema);
