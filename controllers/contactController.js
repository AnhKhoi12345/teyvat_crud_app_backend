const Contact = require("../models/contact");

const getContact = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    // const contact = new Contact({
    //   name: req.body.name,
    //   phone: req.body.phone,
    //   date: req.body.author,
    //   email: req.body.email,
    //   people: req.body.people,
    //   code: req.body.code,
    // });
    // await contact.save();
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateContact = async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;
    // const fileName = req.file.filename;
    const toBeUpdatedContact = Object.assign(body);

    console.log(toBeUpdatedContact);
    console.log(req.body);
    // console.log(req.file);
    const contact = await Contact.findByIdAndUpdate(id, toBeUpdatedContact);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    const updatedContact = await Contact.findById(id);
    console.log(updatedContact);
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
};
