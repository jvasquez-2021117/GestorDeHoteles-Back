'use strict'

const hotelController = require('./hotel.controller');
const express = require('express');
const api = express.Router();

api.get('/test', hotelController.test);
module.exports = api;