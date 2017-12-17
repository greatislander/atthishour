const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  let commit = process.env.NOW_URL ? process.env.NOW_URL : Date.now();
  commit = commit.replace("https://atthishour-", "").replace(".now.sh", "");
  res.render("credits", {
    title: "At This Hour: Credits",
    commit: commit,
  });
});

module.exports = router;
