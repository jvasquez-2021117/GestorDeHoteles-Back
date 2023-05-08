'use strict'

const Bill = require('./bill.model');
const Room = require('../room/room.model')
const Service = require('../aditionalServices/services.model');
const Consumption = require('../consumption/consumption.model');

exports.test = (req, res)=>
{
    return res.send({message: 'Test function running'});
}

exports.addBill = async(req, res)=>{
    try{
        let data = req.body;
        let billExist = await Bill.findOne({description: data.description});
        if(billExist) return res.send({message: 'Bill already exists'});
        let roomUpdate = await Room.findByIdAndUpdate({_id: data.room}, {availability: 'No disponible'}, {new: true});
        data.roomPrice = parseInt(roomUpdate.price);
        let totalServices = 0; 
        let totalConsumption = 0;
        for(let i = 0; i<data.services; i++){
            let service = await Service.findOne({_id: data.services[i]});
            totalServices = parseInt(totalServices) + parseInt(service.price);
        }
        for(let i = 0; i<data.consumption; i++){
            let consumption = await Consumption.findOne({_id: data.consumption});
            totalConsumption =parseInt(totalConsumption) + parseInt(consumption.price)
        }
        let total = totalServices + totalConsumption + data.roomPrice;
        let bill = new Bill({user: data.user, name: data.name, surname: data.surname, nit: data.nit, hotel: data.hotel, room: data.room, description: data.description, roomPrice: data.roomPrice, services:  data.services, consumption: data.consumption, total: total});
        await bill.save();
        return res.status(201).send({message: 'Bill added successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error adding bill'});
    }
}

exports.updateBill = async(req, res)=>{
    try{
        let billId = req.params.id;
        let data = req.body;
        let updateBill = await Bill.findOneAndUpdate({_id: billId}, data, {new: true});
        if(!updateBill) return res.send({message: 'Bill not found'});
        return res.status(201).send({message: 'Bill updated successfully'});
    }catch(err){
        console.error();
        return res.status(500).send({message: 'Error updating bill'});
    }
}

exports.deleteBill = async(req, res)=>{
    try {
        let billId = req.params.id
        let deleteBill = await Bill.findByIdAndDelete({_id: billId});
        if(!deleteBill) return res.send({message: 'Bill not found'});
        return res.status(201).send({message: 'Bill deleted successfully'});
    }catch(error){
        console.error(error)
        return res.status(500).send({message: 'Error deleting bill'});
    }
}

exports.getBill = async(req, res)=>{
    try{
        let bill = await Bill.find();
        return res.status(200).send({bill});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting bill'});
    }
}

exports.getById = async(req, res)=>{
    try{
        let { id } = req.params;
        let bill = await Bill.findOne({_id: id});
        if(!bill) return res.send({message: 'Bill not found'});
        return res.status(200).send({bill});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting'});
    }
}