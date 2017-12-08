const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.render("placeholder", { title: "At This Hour" });
});

module.exports = router;
