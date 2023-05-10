'use strict'

const express = require('express');
const api = express.Router();
const eventController = require('./event.controller');

api.get('/test', eventController.test);
api.post('/addEvents', eventController.addEvents);
api.put('/updateEvent/:id', eventController.updateEvent);
api.get('/getEvent', eventController.getEvent);
api.get('/getById/:id', eventController.getById);

module.exports = api;