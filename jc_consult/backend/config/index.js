const express  = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./app_db')

var clientsController = require('./Controller/clientsController')
var adminController = require('./controller/adminController')

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at server 3000'));

app.use('/clients', clientsController);
app.use('/admins', adminController);