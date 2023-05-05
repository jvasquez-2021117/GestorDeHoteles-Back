'use strict'

const Room = require('./room.model');

exports.test = (req, res)=>{
    return  res.send({message: 'Test fuction is running'});
}

exports.add = async(req, res)=>{
    try{
        let data = req.body;
        let roomExists = await Room.findOne({name: data.name});
        if(roomExists) return res.send({message: 'Room already exists'});
        let newRoom = new Room(data);
        await newRoom.save();
        return res.status(200).send({message: 'Room created successfully'});
    }catch(e){
        console.error(e);
        return res.status(500).send({message: 'Error adding'});
    }
}