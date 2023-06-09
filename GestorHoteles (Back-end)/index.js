'use strict'

require('dotenv').config();
const mongoConfig = require('./configs/mongo');
const app = require('./configs/app');
const adminDefault = require('./src/user/user.controller')

adminDefault.adminDefault();
mongoConfig.connect();
app.initServer();