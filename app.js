const express = require("express");
const app = express();

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send("<h1>99 little bugs in the code</h1><a href='./bugs/101'>pull on down, patchit around</a>");
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  res.send();
});

module.exports = app;
