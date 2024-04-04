const Order = require("../models/order");

const getOrder = async (req, res) => {
  try {
    const order = await Order.find({});
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    // const order = new Order({
    //   name: req.body.name,
    //   phone: req.body.phone,
    //   date: req.body.author,
    //   email: req.body.email,
    //   people: req.body.people,
    //   code: req.body.code,
    // });
    // await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;
    // const fileName = req.file.filename;
    const toBeUpdatedOrder = Object.assign(body);

    console.log(toBeUpdatedOrder);
    console.log(req.body);
    // console.log(req.file);
    const order = await Order.findByIdAndUpdate(id, toBeUpdatedOrder);
    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }
    const updatedOrder = await Order.findById(id);
    console.log(updatedOrder);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }
    res.status(200).json({ message: "order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getOrder,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
