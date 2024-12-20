const express = require('express');
const router = express.Router();
const oroductController = require('../Controller/OrderController')

router.post('/create' , oroductController.createOrder);
// router.get('/findAll' , productController.findAllProduct);
// router.get('/findById/:id' , productController.findById);
// router.put('/update/:id', upload.array('image', 6) , productController.update);
// router.delete('/delete/:id', productController.deleteData);

module.exports = router;