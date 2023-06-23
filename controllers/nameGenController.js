const express = require("express");
const router = express.Router();

// New Project Name Generator
router.get("/:verb/:adjective/:noun", (req, res) => {
  let { verb, adjective, noun } = req.params;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = router;
