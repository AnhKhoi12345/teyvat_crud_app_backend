const express = require("express");
const router = express.Router();

const {
  getStaff,
  getSingleStaff,
  createStaff,
  updateStaff,
  deleteStaff,
} = require("../controllers/staffController");
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
router.get("/", getStaff);
router.get("/:id", getSingleStaff);
router.post("/", upload, createStaff);
router.put("/:id", upload, updateStaff);
router.delete("/:id", deleteStaff);

module.exports = router;
