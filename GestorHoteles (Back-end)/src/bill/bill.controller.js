'use strict'

const Bill = require('./bill.model');

exports.test = (req, res)=>
{
    return res.send({message: 'Test function running'});
}

exports.addBill = async(req, res)=>{
    try{
        let data = req.body;
        let billExist = await Bill.findOne({description: data.description});
        if(billExist) return res.send({message: 'Bill already exists'});
        let bill = new Bill(data);
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