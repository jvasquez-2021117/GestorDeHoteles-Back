'use strict'

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const eventTypeRoutes = require('../src/eventType/eventType.routes')

const app = express();
const port = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/eventType', eventTypeRoutes)

exports.initServer = () => {
    app.listen(port);
    console.log(`Server http running in port ${port}`);
}