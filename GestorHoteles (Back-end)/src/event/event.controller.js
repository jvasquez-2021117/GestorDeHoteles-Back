'use strict'

const Events = require('./event.model');

exports.test = (req, res)=>{
    return res.send({message: 'test fuction is running'});
}

exports.addEvents = async(req, res)=>{
    try{
        let data = req.body;
        let eventExist = await Events.findOne({name: data.name});
        if(eventExist) return res.send({message: 'Event already exists'});
        let event = new Events(data);
        await event.save();
        return res.status(201).send({message: 'Event added successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error adding event'});
    }
}

exports.updateEvent = async(req, res)=>{
    try{
        let eventId = req.params.id;
        let data = req.body;
        let updateEvent = await Events.findOneAndUpdate({_id: eventId}, data, {new: true});
        if(!updateEvent) return res.send({message: 'Event not found'});
        return res.status(201).send({message: 'Event updated successfully'});
    }catch(err){
        console.error();
        return res.status(500).send({message: 'Error updating event'});
    }
}

exports.getEvent = async(req, res)=>{
    try{
        let event = await Events.find();
        return res.status(200).send({event});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting events'});
    }
}

exports.getById = async(req, res)=>{
    try{
        let { id } = req.params;
        let event = await Events.findOne({_id: id});
        if(!event) return res.send({message: 'Event not found'});
        return res.status(200).send({event});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting'});
    }
}