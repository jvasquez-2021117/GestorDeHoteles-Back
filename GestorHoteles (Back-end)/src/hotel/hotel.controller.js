'use strict'

const Hotel = require('./hotel.model');

exports.test = (req, res)=>
{
    return res.send({message: 'Test function running'});
}

exports.addHotel = async(req, res)=>{
    try{
        let data = req.body;
        let hotelExist = await Hotel.findOne({description: data.description});
        if(hotelExist) return res.send({message: 'Hotel already exists'});
        let hotel = new Hotel(data);
        await hotel.save();
        return res.status(201).send({message: 'Hotel added successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error adding Hotel'});
    }
}

exports.updateHotel = async(req, res)=>{
    try{
        let hotelId = req.params.id;
        let data = req.body;
        let updatehotel = await Hotel.findOneAndUpdate({_id: hotelId}, data, {new: true});
        if(!updatehotel) return res.send({message: 'Hotel not found'});
        return res.status(201).send({message: 'Hotel updated successfully'});
    }catch(err){
        console.error();
        return res.status(500).send({message: 'Error updating Hotel'});
    }
}

exports.getHotel = async(req, res)=>{
    try{
        let hotel = await Hotel.find();
        return res.status(200).send({hotel});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting Hotel'});
    }
}

exports.getById = async(req, res)=>{
    try{
        let { id } = req.params;
        let hotel = await Hotel.findOne({_id: id});
        if(!hotel) return res.send({message: 'hotel not found'});
        return res.status(200).send({hotel});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting'});
    }
}