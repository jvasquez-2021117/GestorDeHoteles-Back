const express = require('express');
const api = express.Router();
const consumptionController = require('./consumption.controller');

api.get('/test', consumptionController.test);
api.post('/addConsumption', consumptionController.addConsumption);
api.put('/updateConsumption/:id', consumptionController.updateConsumption);
api.get('/getConsumption', consumptionController.getConsumption);
api.get('/getById/:id', consumptionController.getById);

module.exports = api;