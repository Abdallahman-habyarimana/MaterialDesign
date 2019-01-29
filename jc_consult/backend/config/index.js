const express  = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db')

var clientsController = require('../controller/clientController')
var adminController = require('../controller/adminController')

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('Server started at server 3000'));

app.use('/clients', clientsController);
app.use('/admins', adminController);