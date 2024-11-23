const express = require('express');
const router = express.Router();
const customerController = require('../Controller/CustomerController');
const verifyToken = require('../Middleware/AuthMiddleware');

router.post('/create', customerController.create);
router.get('/findById/:id', verifyToken , customerController.findById);
router.get('/findAll', verifyToken , customerController.findAll);
router.put('/update/:id', verifyToken, customerController.update);
router.delete('/delete/:email', verifyToken, customerController.deleteByEmail);

module.exports = router