const Book = require("../models/book");

const getBook = async (req, res) => {
  try {
    const book = await Book.find({});
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    // const book = new Book({
    //   name: req.body.name,
    //   phone: req.body.phone,
    //   date: req.body.author,
    //   email: req.body.email,
    //   people: req.body.people,
    //   code: req.body.code,
    // });
    // await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;
    // const fileName = req.file.filename;
    const toBeUpdatedBook = Object.assign(body);

    console.log(toBeUpdatedBook);
    console.log(req.body);
    // console.log(req.file);
    const book = await Book.findByIdAndUpdate(id, toBeUpdatedBook);
    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }
    const updatedBook = await Book.findById(id);
    console.log(updatedBook);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }
    res.status(200).json({ message: "book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getBook,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
