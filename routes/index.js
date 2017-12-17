const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  let commit = process.env.NOW_URL ? process.env.NOW_URL : Date.now();
  commit = commit.replace("https://atthishour-", "").replace(".now.sh", "");
  const showTime = process.env.SHOWTIME
    ? process.env.SHOWTIME
    : "2017-12-17T19:30Z";
  res.render("index", {
    title: "At This Hour",
    showtime: showTime,
    commit: commit,
  });
});

module.exports = router;
