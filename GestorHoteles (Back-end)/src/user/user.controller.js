'use strict'

const User = require('./user.model');
const { encrypt, checkPassword } = require('../utils/validate');


exports.test = (req, res) => {
    return res.send({ message: 'Test function running User' });
}

exports.adminDefault = async (req, res) => {
    try {
        let admin = {
            name: 'Selvin',
            surname: 'Chuquiej',
            password: '123',
            email: 'schuquiej@gmail.com',
            phone: '12345678',
            role: 'ADMIN-APP',
        }
        admin.password = await encrypt(admin.password);
        let existAdmin = await User.findOne({ email: admin.email });
        if (existAdmin) return
        let adminDefault = new User(admin);
        await adminDefault.save();
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error creating admin default' });
    }
}

exports.register = async (req, res) => {
    try {
        let data = req.body;
        data.password = await encrypt(data.password);
        data.role = 'CLIENT';
        let existUser = await User.findOne({ email: data.email });
        if (existUser) return res.send({ message: 'This email already existr' });
        let user = new User(data);
        await user.save();
        return res.send({ message: 'Account created succesfully' });
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error creating account' });
    }
}

exports.login = async (req, res) => {
    try {
        let data = req.body;
        let user = await User.findOne({ email: data.email });
        if (user) return res.send({ message: 'User logged' });
        return res.status(404).send({ message: 'Invalid Credentials' });
    } catch (e) {
        console.error(e);
        return res.status(404).send({ message: 'Error not logged' });
    }
}

exports.viewUsers = async (req, res) => {
    try {
        let users = await User.find();
        return res.send({ users });
    } catch (e) {
        console.error(e);
        return res.status(404).send({ message: 'Error not view users' });
    }
}

exports.updateUser = async (req, res) => {
    try {
        let idUser = req.params.id;
        let data = req.body;
        if (data.password != null) return res.send({ message: 'Password not update' });
        let adminUser = User.findOne({ role: "ADMIN-APP" });
        if (idUser == adminUser._id) return res.send({ message: 'Admin not update' });
        let existUser = await User.findOne({ email: data.email });
        if (existUser) return res.send({ message: 'This email already exists' });
        let updatedUser = User.findOneAndUpdate(
            { _id: idUser },
            data,
            { new: true }
        )
        if (!updatedUser) return res.send({ message: 'User not found and not update' });
        return res.send({ message: 'User updated', idUser })
    } catch (e) {
        console.error(e);
        return res.status(404).send({ message: 'Error updating user' });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let idUser = req.params.id;
        let adminUser = User.findOne({ role: "ADMIN-APP" });
        if (idUser == adminUser._id) return res.send({ message: 'Admin not update' });
        let userDeleted = await User.findOneAndDelete({ _id: idUser });
        if (!userDeleted) return res.send({ message: 'Account not found and not deleted' });
        return res.send({ message: 'User deleting succesfully' });
    } catch (e) {
        console.error(e);
        return res.status(404).send({ message: 'Error deleting user' });
    }
}