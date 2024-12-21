const express = require("express");
const router = express.Router();
const ContactController = require("../Controller/ContactController");

router.post("/send", ContactController.create);

module.exports = router;