'use strict'    

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3200;

const eventTypeRoutes = require('../src/eventType/eventType.routes');
const servicesRoutes = require('../src/aditionalServices/services.routes');
const eventRoutes = require('../src/event/event.routes');
const roomTypeRoutes = require('../src/roomType/roomType.routes');
const roomRoutes = require('../src/room/room.routes');
const consumptionRoutes = require('../src/consumption/consumption.routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

/*app.use('/room', roomRoutes);
app.use('/roomType', roomTypeRoutes);*/
app.use('/events', eventTypeRoutes);
app.use('/services', servicesRoutes);
app.use('/event', eventRoutes);
app.use('/consumption', consumptionRoutes);



exports.initServer = () => {
    app.listen(port);
    console.log(`Server http running in port ${port}`);
}