'use strict'

const userHotelController = require('./userHotel.controller');
const express = require('express');
const api = express.Router();

api.get('/test', userHotelController.test);
api.post('/add', userHotelController.addUserHotel);
api.put('/update/:id', userHotelController.updateUserHotel);
api.delete('/delete/:id', userHotelController.deleteUserHotel);

module.exports = api;