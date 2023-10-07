const express = require("express");
const { serverPort } = require("./config/Config.js");
const db = require("./config/Database.js");
const ProductRouter = require("./app/product/router.js");
const cors = require("cors");

const app = express("app");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", ProductRouter);

app.use("/", (req, res) => {
  res.json({ msg: "page not found" });
});

app.listen(serverPort, () =>
  console.log(`App is running on port ${serverPort}`)
);
