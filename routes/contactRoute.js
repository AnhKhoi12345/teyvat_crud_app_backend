const express = require("express");
const router = express.Router();

const {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.get("/", getContact);
router.get("/:id", getSingleContact);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
