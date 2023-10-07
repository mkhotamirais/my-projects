const Product = require("./model.js");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
  }
};

const getProductByid = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

const saveProduct = async (req, res) => {
  res.json({ body: req.body, file: req.file });
  // const product = new Product(req.body);
  // await product.save();
  // res.json({ data: product, msg: "Product is created successfully" });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json({ data: product, msg: "Product is updated successfully" });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.json({ data: product, msg: "Product is deleted successfully" });
};

module.exports = {
  getProducts,
  getProductByid,
  saveProduct,
  updateProduct,
  deleteProduct,
};
