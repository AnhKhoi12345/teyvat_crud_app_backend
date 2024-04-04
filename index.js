const express = require("express");
var cors = require("cors");
const app = express();
// Using Node.js `require()`
const mongoose = require("mongoose");
const Food = require("./models/food");
const foodRoute = require("./routes/foodRoute");
const News = require("./models/news");
const newsRoute = require("./routes/newsRoute");
const Book = require("./models/book");
const bookRoute = require("./routes/bookRoute");
// const Book = require("./models/book");
const orderRoute = require("./routes/orderRoute");
const contactRoute = require("./routes/contactRoute");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/food", foodRoute);
app.use("/api/news", newsRoute);
app.use("/api/book", bookRoute);
app.use("/api/order", orderRoute);
app.use("/api/contact", contactRoute);
app.use("/uploads", express.static("uploads"));
app.get("/", function (req, res) {
  res.send("Hello from Teyvat CRUD APP");
});

mongoose
  .connect(
    "mongodb+srv://khoi:NhWkoh5V6CpRwalK@backenddb.wrmur27.mongodb.net/Teyvat-Restaurant?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3001, () => {
      console.log("Server listening on port 3001");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
