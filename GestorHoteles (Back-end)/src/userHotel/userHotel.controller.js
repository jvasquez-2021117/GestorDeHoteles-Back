'use strict'

const UserHotel = require('./userHotel.model');
const { encrypt, checkPassword } = require('../utils/validate');


exports.test = (req, res) => {
    return res.send({ message: 'Test function running UserHotel' });
}

exports.addUserHotel = async (req, res) => {
    try {
        let data = req.body;
        data.password = await encrypt(data.password);
        data.role = 'ADMIN-HOTEL';
        let existUser = await UserHotel.findOne({ email: data.email });
        if (existUser) return res.send({ message: 'This email already exists' });
        let user = new UserHotel(data);
        await user.save();
        return res.send({ message: 'Account created succesfully' });
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error adding Admin Hotel' });
    }
}