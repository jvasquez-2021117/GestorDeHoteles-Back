'use strict'

const Reservation = require('./reservation.model');
const Hotel = require('../hotel/hotel.model');
const Room = require('../room/room.model');

exports.test = (req, res) => {
    return res.send({ message: 'Test function running' });
}

exports.addReservation = async (req, res) => {
    try {
        let data = req.body;
        let reservationExist = await Reservation.findOne({ description: data.description });
        if (reservationExist) return res.send({ message: 'Reservation already exists' });
        let reservation = new Reservation(data);
        await reservation.save();
        let updateRoom = await Room.findOneAndUpdate({_id: data.room}, {availability: 'No disponible'});
        return res.status(201).send({message: 'Reservation added successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: 'Error adding Reservation' });
    }
}

exports.updateReservation = async (req, res) => {
    try {
        let reservationId = req.params.id;
        let data = req.body;
        let updateReservation = await Reservation.findOneAndUpdate({ _id: reservationId }, data, { new: true });
        if (!updateReservation) return res.send({ message: 'Reservation not found' });
        return res.status(201).send({ message: 'Reservation updated successfully' });
    } catch (err) {
        console.error();
        return res.status(500).send({ message: 'Error updating reservation' });
    }
}

exports.deleteReservation = async (req, res) => {
    try {
        let reservationId = req.params.id
        let deleteReservation = await Reservation.findByIdAndDelete({_id: reservationId});
        if(!deleteReservation) return res.send({message: 'Reservation not found'});
        let updateRoom = await Room.findOneAndUpdate({_id: data.room}, {availability: 'Disponible'});
        return res.status(201).send({message: 'Reservation deleted successfully'});
    }catch(error){
        console.error(error)
        return res.status(500).send({ message: 'Error deleting Reservation' });
    }
}

exports.getReservation = async (req, res) => {
    try {
        let reservation = await Reservation.find().populate('user').populate('hotel').populate('room').populate('event');
        return res.status(200).send({ reservation });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error getting Reservation' });
    }
}

exports.getById = async (req, res) => {
    try {
        let { id } = req.params;
        let reservation = await Reservation.findOne({ _id: id });
        if (!reservation) return res.send({ message: 'Reservation not found' });
        return res.status(200).send({ reservation });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error getting' });
    }
}

exports.hotelReservation = async (req, res) => {
    try {
        let { hotel } = req.body;
        let reservations = await Reservation.find({ hotel: hotel });
        return res.status(200).send({ reservations });
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error getting' });
    }
}