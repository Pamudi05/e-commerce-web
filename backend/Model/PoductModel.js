const mongoose = require("mongoose");

function generateRandomCode() {
  return Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
}

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    code: { type: String, required: true, default: generateRandomCode },
    qty: { type: String, required: true },
    note: { type: String, required: true },
    image: { type: [String], required: true },
    category: {type: String, require: true},
    activeState: { type: Boolean, required: true },
    // createdAt: { type: Date, required: true, default: Date.now },
    // lastUpdated: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt
  }
);
module.exports = mongoose.model("product", productSchema);
