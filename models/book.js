const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    people: {
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
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
