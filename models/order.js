const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    phone: {
      type: String,
      required: true,
    },
    order: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
