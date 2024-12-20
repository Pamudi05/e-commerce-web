const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    customerId: { type: String },
    discount: { type: String },
    paymentType: {
      type: String,
      enum: ["CASH", "CREDIT"],
      default: "CREDIT",
      required: true,
    },
    subTotal: { type: Number },
    grandTotal: { type: Number },
    shipping: { type: Number, default: 300 },
    Status: {
      type: String,
      enum: ["NEW", "ACCEPTED", "INPROGRESS", "REJECTED", "COMPLETED"],
      default: "NEW",
    },
    fullName: { type: String, required: true },
    companyName: { type: String },
    address: { type: String, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", },
        quantity: { type: Number },
        price: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("order", OrderSchema);
