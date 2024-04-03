const express = require("express");
const router = express.Router();

const {
  getNews,
  getSingleNews,
  createNews,
  updateNews,
  deleteNews,
} = require("../controllers/newsController");
const multer = require("multer");

// image upload
let storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");
router.get("/", getNews);
router.get("/:id", getSingleNews);
router.post("/", upload, createNews);
router.put("/:id", upload, updateNews);
router.delete("/:id", deleteNews);

module.exports = router;
