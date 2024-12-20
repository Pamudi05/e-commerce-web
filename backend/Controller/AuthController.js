const Customer = require("../Model/CustomerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_KEY;

const login = async (req, res) => {
  try {
    const existingCustomer = await Customer.findOne({ id: req.body.id });

    if (!existingCustomer) {
      return res.status(404).json({ message: "Customer Not Found" });
    }

    const isConfirmed = await bcrypt.compare(
      req.body.password,
      existingCustomer.password
    );

    if (!isConfirmed) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const simplifiedCustomer = {
      customerId: existingCustomer._id,
      email: existingCustomer.email,
    };
    const token = jwt.sign({ customer: simplifiedCustomer }, secret, {
      expiresIn: "5h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 5 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({ message: "Customer Successfully Login", customer: simplifiedCustomer });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error: error });
  }
};

const logOut = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      maxAge: 5 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ message: 'Logout successful!' });
    res.end();
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error: error });
  }
};

module.exports = { login, logOut };
