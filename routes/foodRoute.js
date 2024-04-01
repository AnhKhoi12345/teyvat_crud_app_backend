const express = require("express");
const router = express.Router();

const {
  getFood,
  getSingleFood,
  createFood,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");
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
router.get("/", getFood);
router.get("/:id", getSingleFood);
router.post("/", upload, createFood);
router.put("/:id", upload, updateFood);
router.delete("/:id", deleteFood);

module.exports = router;
