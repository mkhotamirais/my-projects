const multer = require("multer");
const os = require("os");
const upload = multer({ dest: os.tmpdir() });
const {
  getProducts,
  getProductByid,
  saveProduct,
  updateProduct,
  deleteProduct,
} = require("./controller");

const router = require("express").Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductByid);
router.post("/products", upload.single("image"), saveProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
