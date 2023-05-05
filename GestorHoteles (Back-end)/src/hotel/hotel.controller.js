'use strict'

exports.test = (req, res) => {
    return res.send({ message: 'User Hotel function running' });
}

exports.add = async (req, res) => {
    try {

    } catch (e) {
        console.error(e);
        return res.send({message: 'Error Adding Hotel'});
    }
}