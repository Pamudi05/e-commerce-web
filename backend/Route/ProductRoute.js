const express = require('express');
const router = express.Router();
const upload = require('../Utils/multer');
const productController = require('../Controller/ProductController')

router.post('/create' , upload.array('image', 6) , productController.createProduct);
router.get('/findAll' , productController.findAllProduct);
router.get('/findById/:id' , productController.findById);
router.put('/update/:id', upload.array('image', 6) , productController.update);
router.delete('/delete/:id', productController.deleteData);

module.exports = router;
