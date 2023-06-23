const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send("<h1>99 little bugs in the code</h1>");
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  let numberOfBugs = req.params.numberOfBugs;
  if (numberOfBugs >= 200) {
    res.json("Too many bugs!! Start over!");
  } else {
    res.json(`${numberOfBugs} little bugs in the code`);
  }
});

app.get("/pokemon", (req, res) => {
  res.json("pokemon");
});

app.get("/pokemon/search", (req, res) => {
  res.json("[]");
});

app.get("/pokemon/search/:name", (req, res) => {
  res.json("[]");
});

// app.get("/:verb/:adjective/:noun", (req, res) => {
//   res.json({
//     verb: request.params.verb,
//     adkective: request.params.adjective,
//     noun: request.params.noun,
//   });
// });

module.exports = app;
