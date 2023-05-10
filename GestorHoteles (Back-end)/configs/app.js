'use strict'

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const eventTypeRoutes = require('../src/eventType/eventType.routes')

const app = express();
const port = process.env.PORT || 3200;

<<<<<<< Updated upstream
=======
const eventTypeRoutes = require('../src/eventType/eventType.routes');
const servicesRoutes = require('../src/aditionalServices/services.routes');
const eventRoutes = require('../src/event/event.routes');
const roomTypeRoutes = require('../src/roomType/roomType.routes');
const roomRoutes = require('../src/room/room.routes');
const consumptionRoutes = require('../src/consumption/consumption.routes');
const hotelRoutes = require('../src/hotel/hotel.routes');
const reservationRoutes = require('../src/reservation/reservation.routes');
const billRoutes = require('../src/bill/bill.routes');
const userRoutes = require('../src/user/user.routes')

>>>>>>> Stashed changes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

<<<<<<< Updated upstream
app.use('/eventType', eventTypeRoutes)
=======
app.use('/room', roomRoutes);
app.use('/roomType', roomTypeRoutes);
app.use('/events', eventTypeRoutes);
app.use('/services', servicesRoutes);
app.use('/event', eventRoutes);
app.use('/consumption', consumptionRoutes);
app.use('/hotel', hotelRoutes);
app.use('/reservation', reservationRoutes);
app.use('/bill', billRoutes);
app.use('/user', userRoutes)
>>>>>>> Stashed changes

exports.initServer = () => {
    app.listen(port);
    console.log(`Server http running in port ${port}`);
}