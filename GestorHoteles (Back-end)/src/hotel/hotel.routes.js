'use strict'

const express = require('express');
const api = express.Router();
const hotelController = require('./hotel.controller');

api.get('/test', hotelController.test);
api.post('/addHotel', hotelController.addHotel);
api.put('/updateHotel/:id', hotelController.updateHotel);
api.get('/getHotel', hotelController.getHotel);
api.get('/getById/:id', hotelController.getById);


module.exports = api;