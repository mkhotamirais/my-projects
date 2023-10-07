const router = require("express").Router();

router.get("/users", (req, res) => {
  res.send("halo users");
});

module.exports = router;
