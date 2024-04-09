const Staff = require("../models/staff");

const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find({});
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id);
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStaff = async (req, res) => {
  try {
    // const staff = await Staff.create(req.body);
    const staff = new Staff({
      name: req.body.name,
      age: req.body.age,
      birth: req.body.birth,
      job: req.body.job,
      phone: req.body.phone,
      image: req.file.filename,
      email: req.body.email,
      address: req.body.address,
      introduction: req.body.introduction,
      media: req.body.media,
    });
    await staff.save();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;
    const fileName = req.file.filename;
    const toBeUpdatedStaff = Object.assign(body, { image: fileName });

    console.log(toBeUpdatedStaff);
    console.log(req.body);
    console.log(req.file);
    const staff = await Staff.findByIdAndUpdate(id, toBeUpdatedStaff);
    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    const updatedStaff = await Staff.findById(id);
    console.log(updatedStaff);
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findByIdAndDelete(id);
    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json({ message: "Staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getStaff,
  getSingleStaff,
  createStaff,
  updateStaff,
  deleteStaff,
};
