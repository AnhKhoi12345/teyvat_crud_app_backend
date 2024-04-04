const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
  },
  {
    timestamps: true,
  }
);
const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
