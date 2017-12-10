const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  const streamId = process.env.STREAM ? process.env.STREAM : "SxWKffqBjMM";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ id: streamId }));
});

module.exports = router;
