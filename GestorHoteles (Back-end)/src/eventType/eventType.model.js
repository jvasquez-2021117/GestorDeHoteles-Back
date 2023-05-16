'use strict'

const mongoose = require('mongoose');

const eventTypeSchema = mongoose.Schema({
    name: {
        type: String
    }

}, {
    versionKey: false
});

module.exports = mongoose.model('EventType', eventTypeSchema);
