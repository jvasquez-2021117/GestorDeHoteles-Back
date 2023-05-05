'use strict'

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3200;

const roomTypeRoutes = require('../src/roomType/roomType.routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/roomType', roomTypeRoutes);

exports.initServer = () =>{
    app.listen(port);
    console.log(`Server http running in port ${port}`);
}