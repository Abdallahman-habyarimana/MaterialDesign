const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jc_consult', { useNewUrlParser: true }, (err) => {
    if (!err)
       console.log('Connection Succeeded');
    else
       console.log('Error : ' + JSON.stringify(err, undefined,2));
});

module.exports = mongoose;