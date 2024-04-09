const mongoose = require("mongoose");

const StaffSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    age: {
      type: Number,
      required: true,
    },
    birth: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: false,
    },
    media: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const Staff = mongoose.model("Staff", StaffSchema);
module.exports = Staff;
