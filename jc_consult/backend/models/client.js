const mongoose = require('mongoose');

var Clients = mongoose.model('Clients', {
    userId: {  type: Number } ,
    compName: { type: String },
    compCRANumber: { type: Number },
    compAddress: { type: String },
    compCity : { type: String }, 
    compCode : { type: String }, 
    compProvince: { type: String },
    compPhone: { type: Number },
    compContact : { type: String }
});

module.exports = { Clients };