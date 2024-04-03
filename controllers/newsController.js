const News = require("../models/news");

const getNews = async (req, res) => {
  try {
    const news = await News.find({});
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNews = async (req, res) => {
  try {
    // const news = await news.create(req.body);
    const news = new News({
      title: req.body.title,
      detail: req.body.detail,
      image: req.file.filename,
      author: req.body.author,
      category: req.body.category,
    });
    await news.save();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateNews = async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;
    const fileName = req.file.filename;
    const toBeUpdatedNews = Object.assign(body, { image: fileName });

    console.log(toBeUpdatedNews);
    console.log(req.body);
    console.log(req.file);
    const news = await News.findByIdAndUpdate(id, toBeUpdatedNews);
    if (!news) {
      return res.status(404).json({ message: "news not found" });
    }
    const updatedNews = await News.findById(id);
    console.log(updatedNews);
    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findByIdAndDelete(id);
    if (!news) {
      return res.status(404).json({ message: "news not found" });
    }
    res.status(200).json({ message: "news deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getNews,
  getSingleNews,
  createNews,
  updateNews,
  deleteNews,
};
