const express = require('express');
const routerAPI = express.Router();
const apiController = require('../controllers/apiController');
const customerController = require('../controllers/customerController');

routerAPI.get('/users', apiController.getUsers);
routerAPI.post('/users', apiController.createUser);
routerAPI.put('/users', apiController.updateUser);
routerAPI.delete('/users', apiController.deleteUser);

routerAPI.post('/file', apiController.uploadSingleFile);
routerAPI.post('/files', apiController.uploadMultipleFiles);

routerAPI.post('/customers', customerController.createCustomer);
routerAPI.post('/customers-many', customerController.createArrayCustomers);
routerAPI.get('/customers', customerController.getCustomers);
routerAPI.put('/customers', customerController.updateCustomer);
routerAPI.delete('/customers', customerController.deleteCustomer);
routerAPI.delete('/customers-many', customerController.deleteArrayCustomers);

routerAPI.get('/info', (req, res) => {
    res.send(req.query.name);
});

module.exports = routerAPI;