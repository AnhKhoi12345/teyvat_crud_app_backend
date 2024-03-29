const express = require("express");
const router = express.Router();
const {
  getFood,
  getSingleFood,
  createFood,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

router.get("/", getFood);
router.get("/:id", getSingleFood);
router.post("/", createFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

module.exports = router;
