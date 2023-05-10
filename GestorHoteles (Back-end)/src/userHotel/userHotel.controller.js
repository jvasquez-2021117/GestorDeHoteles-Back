'use strict'

const UserHotel = require('./userHotel.model');
const { encrypt, checkPassword } = require('../utils/validate');


exports.test = (req, res) => {
    return res.send({ message: 'Test function running UserHotel Complete' });
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

exports.updateUserHotel = async (req, res) => {
    try {
        let idUserHotel = req.params.id;
        let data = req.body
        if (data.password != null) return res.send({ message: 'Password not update' });
        let existUser = await User.findOne({ email: data.email });
        if (existUser) return res.send({ message: 'This email already exists' });
        let updatedUserHotel = UserHotel.findOneAndUpdate(
            { _id: idUserHotel },
            data,
            { new: true }
        )
        if (!updatedUserHotel) return res.send({ message: 'User not found and not update' });
        return res.send({ message: 'User updated', idUserHotel })
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error updating Admin Hotel' });
    }
}


exports.deleteUserHotel = async(req, res)=> {
    try {
        let idUserHotel = req.params.id;
        let userDeleted = await UserHotel.findOneAndDelete({ _id: idUserHotel });
        if (!userDeleted) return res.send({ message: 'Account not found and not deleted' });
        return res.send({ message: 'User deleting succesfully' });
    } catch (e) {
        console.error(e);
        return res.status(404).send({ message: 'Error deleting user' });
    }
}