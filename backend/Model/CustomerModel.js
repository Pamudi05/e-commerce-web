const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    activeState: { type: Boolean, default: true, required: true },
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt
  }
);

module.exports = mongoose.model("customer", CustomerSchema);
