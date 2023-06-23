const express = require("express");

const app = express();

app.get("/:verb/:adjective/:noun", (req, res) => {
  const verb = req.params.verb;
  const adjective = req.params.adjective;
  const noun = req.params.noun;

  res.json(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// EXPORT
module.exports = app;
