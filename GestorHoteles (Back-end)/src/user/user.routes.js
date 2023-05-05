'use strict'

const userController = require('./user.controller');
const express = require('express');
const api = express.Router();

api.get('/test', userController.test);
api.get('/get', userController.viewUsers);
api.post('/register', userController.register);
api.post('/login', userController.login);

module.exports = api;