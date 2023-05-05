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