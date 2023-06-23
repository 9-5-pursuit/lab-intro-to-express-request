const express = require(`express`);
const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

const app = express();

// Poke-Express
app.get(`/`, (req, res) => {
  res.send(`Welcome 99 Pokemon`);
});

app.get(`/pokemon`, (req, res) => {
  res.json(pokemon);
});

app.get(`/pokemon/:indexOfArray`, (req, res) => {});

// 99 little bugs in the code
app.get(`/bugs`, (req, res) => {
  res.send(`99 little bugs in the code, 
    99 little bugs, 
    <a href="localhost:8888/bugs/101>"Pull one down, 
    Patch it around</a>
    101 bugs in the code`);
});

app.get(`/bugs/:numberOfBugs`, (req, res) => {
  if (req.params.numberOfBugs >= 200) {
    res.send(`<a href="localhost:8888/bugs">Too many bugs!! Start over!</a>`);
  } else {
    res.send(`${req.params.numberOfBugs} little bugs in the code, 
    ${req.params.numberOfBugs} little bugs, 
    <a href="localhost:8888/bugs/${
      Number(req.params.numberOfBugs) + Number(2)
    }">Pull one down</a>, 
    Patch it around
    ${Number(req.params.numberOfBugs) + Number(2)} bugs in the code`);
  }
});

// Project name generator
app.get(`/:verb/:adjective/:noun`, (req, res) => {
  res.send(
    `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`
  );
});

module.exports = app;
