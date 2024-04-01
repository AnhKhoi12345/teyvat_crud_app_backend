const Food = require("../models/food");

const getFood = async (req, res) => {
  try {
    const food = await Food.find({});
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFood = async (req, res) => {
  try {
    // const food = await Food.create(req.body);
    const food = new Food({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename,
    });
    await food.save();
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    
    // req.body is the data you type in 
    const body = req.body;

    // because you upload the image as a file, it is not considered in the req.body (request body) but in the req.file (request file)
    const fileName = req.file.filename;

    const toBeUpdatedFood = Object.assign(body, {image: fileName});
    console.log(toBeUpdatedFood);

    // check the console log to understand it better
    // req.body only contains name, price except the image file
    // req.file contains filename, file size, etc.
    console.log("req.body : " + req.body);
    console.log("req.file: " + req.file);
    const food = await Food.findByIdAndUpdate(id, req.body);
    if (!food) {
      return res.status(404).json({ message: "food not found" });
    }
    const updatedFood = await Food.findById(id);
    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findByIdAndDelete(id);
    if (!food) {
      return res.status(404).json({ message: "food not found" });
    }
    res.status(200).json({ message: "food deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getFood,
  getSingleFood,
  createFood,
  updateFood,
  deleteFood,
};
