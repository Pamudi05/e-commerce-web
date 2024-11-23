const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const serverPort = process.env.SERVER_PORT;
const app = express();
app.use(cors());

//------------
const CustomerRoute = require("./Route/CustomerRoute");
const AuthRoute = require("./Route/AuthRoute");
const ProductRoute = require("./Route/ProductRoute");
//-------------

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  mongoose.connect("mongodb://localhost:27017/ecommerce");
  app.listen(serverPort, () => {
    console.log(`server up & Running on port ${serverPort}`);
  });
} catch (e) {
  console.log(e);
}

app.use("/api/v1/customers", CustomerRoute);
app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/products", ProductRoute);

app.use('/uploads', express.static('uploads'));


app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API!");
});