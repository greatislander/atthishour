const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.redirect(
    301,
    "https://zuppatheatre.com/show/at-this-hour-the-deposition-of-harbour-pilot-francis-mackey/"
  );
});

module.exports = router;
