const express = require("express");
const cors = require("cors");

const RouterProducts = require("./app/product/router.js");
const RouterUsers = require("./app/user/router.js");

const app = express();

app.use(cors());

app.use("/pai/users", RouterUsers);
app.use("/api/products", RouterProducts);

app.get("/api", (req, res) => {
  res.send({ msg: "Welcome to mern-myshop api homepage" });
});

app.listen(5000, () => "Server is running on port 5000");
