const express = require("express");
var cors = require("cors");
const app = express();
// Using Node.js `require()`
const mongoose = require("mongoose");
const Food = require("./models/food");
const foodRoute = require("./routes/foodRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/food", foodRoute);
app.use("/uploads", express.static("uploads"));
app.get("/", function (req, res) {
  res.send("Hello from Teyvat CRUD APP");
});

// app.get("/api/food", async (req, res) => {
//   try {
//     const food = await Food.find({});
//     res.status(200).json(food);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// app.get("/api/food/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const food = await Food.findById(id);
//     res.status(200).json(food);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// app.post("/api/food", async (req, res) => {
//   try {
//     const food = await Food.create(req.body);
//     res.status(200).json(food);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.put("/api/food/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const food = await Food.findByIdAndUpdate(id, req.body);
//     if (!food) {
//       return res.status(404).json({ message: "food not found" });
//     }
//     const updatedFood = await Food.findById(id);
//     res.status(200).json(updatedFood);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/api/food/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const food = await Food.findByIdAndDelete(id);
//     if (!food) {
//       return res.status(404).json({ message: "food not found" });
//     }
//     res.status(200).json({ message: "food deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

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
