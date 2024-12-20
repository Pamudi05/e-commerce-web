const express = require("express");
const router = express.Router();
const upload = require('../Utils/multer');
const CartController = require("../Controller/CartController");

router.post("/add", CartController.addToCart);
router.get("/:customerId", CartController.getCartItems);
router.put("/update/:id", CartController.updateCartItem);
router.delete("/remove/:id", CartController.removeCartItem);
router.delete("/clear/:customerId", CartController.clearCart);

module.exports = router;
