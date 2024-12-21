const Customer = require("../Model/CustomerModel");
const bcrypt = require("bcrypt");
const transporter = require("../Utils/nodemailer")

const create = async (req, res) => {
  try {
    const existingEmail = await Customer.findOne({ email: req.body.email });

    if (existingEmail) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    const hash = await bcrypt.hash(req.body.password, 10);

    const customer = new Customer({
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hash,
      address: req.body.address,
      activeState: true,
    });

    const result = await customer.save();
    res.status(201).json({
      message: "Customer Created Successfully",
      data: result,
    });

    const mailOption = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: "Account Created",
      text: "You have successfully created an account",
    };

    transporter.sendMail(mailOption, function (error, info) {
      if (error) {
        return res.status(500).json({ error: error });
      } else {
        //console.log("email sent");
        return res.status(200).json({ message: "Email Sent" , info});
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
};

const findById = (req, res) => {
  try {
    const customerId = req.params.id;

    Customer.findById(customerId)
      .then((result) => {
        if (result) {
          res.status(200).json({ data: result });
        } else {
          res.status(404).json({ message: "Customer Not Found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "something went wrong", error: error });
      });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error });
  }
};

const findAll = (req, resp) => {
  try {
    const searchText = req.query.searchText || "";

    const pageNumber = parseInt(req.query.pageNumber) || 1;
    const pageSize = parseInt(req.query.size) || 10;

    const query = {
      $or: [
        { fullName: new RegExp(searchText, "i") },
        { email: new RegExp(searchText, "i") },
      ],
    };

    console.log(query);

    Customer.find(query)
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .then((response) => {
        console.log("response", response);
        return resp.status(200).json(response);
      });
  } catch (error) {
    console.log(error);
    return resp.status(500).json({ message: "internal server error" });
  }
};

const update = async (req, res) => {
  const update = await Customer.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        fullName: req.body.fullName,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
      },
    },
    { new: true }
  );

  if (update) {
    return res.status(200).json({ message: "Updated" });
  } else {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteByEmail = async (req, res) => {
  const deleteData = await Customer.findAllAndDelete({
    email: req.params.email,
  });

  if (deleteData) {
    return res.status(204).json({ message: "deleted" });
  } else {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { create, findById, findAll, update, deleteByEmail };
