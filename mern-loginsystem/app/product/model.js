const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image_url: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Products", ProductSchema);
