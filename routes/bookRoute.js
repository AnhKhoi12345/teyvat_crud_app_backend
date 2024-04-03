const express = require("express");
const router = express.Router();

const {
  getBook,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
// const multer = require("multer");

// image upload
// let storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   },
// });

// let upload = multer({
//   storage: storage,
// }).single("image");
router.get("/", getBook);
router.get("/:id", getSingleBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
