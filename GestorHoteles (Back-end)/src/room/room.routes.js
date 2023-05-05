'use strict'

const express = require('express');
const api = express.Router();
const roomController = require('./room.controller');

api.get('/', roomController.test);

module.exports = api;