const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("credits", { title: "At This Hour: Credits" });
});

module.exports = router;
