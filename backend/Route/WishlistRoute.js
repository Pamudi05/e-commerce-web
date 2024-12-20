const express = require("express");
const router = express.Router();
const wishlistController = require("../Controller/wishlistController");

router.post("/create", wishlistController.createWishlist);

router.get("/:customerId", wishlistController.findWishlist);

router.get("/", wishlistController.findAllWishlist);

router.delete("/:customerId/:productId", wishlistController.deleteWishlist);

module.exports = router;
