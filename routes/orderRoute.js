const express = require("express");
const router = express.Router();

const {
  getOrder,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

router.get("/", getOrder);
router.get("/:id", getSingleOrder);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
