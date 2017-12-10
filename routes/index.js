const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  const showTime = process.env.SHOWTIME
    ? process.env.SHOWTIME
    : "2017-12-17T19:30Z";
  res.render("index", { title: "At This Hour", showtime: showTime });
});

module.exports = router;
