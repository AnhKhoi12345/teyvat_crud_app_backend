const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter news name"],
    },
    detail: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const News = mongoose.model("News", NewsSchema);
module.exports = News;
