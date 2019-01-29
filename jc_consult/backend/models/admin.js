const mongoose = require('mongoose');

var Admins = mongoose.model('Admins', {
    userId: {  type: Number } ,
    adminFirstName: { type: String },
    adminLastName: { type: String }
});

module.exports = { Admins };