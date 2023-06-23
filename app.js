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

app.get(`/pokemon/:indexOfArray`, (req, res) => {
  if (indexOfArray === -1) {
    `sorry, no pokemon found at /pokemon[${indexOfArray}] - where [${indexOfArray}] is the value from the URL that the user has entered`;
  } else {
    res.json(pokemon.indexOf((poke) => poke === indexOfArray));
  }
});

app.get(`/pokemon/search`);

// 99 little bugs in the code
app.get(`/bugs`, (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>, 
    99 little bugs, 
    <a href="/bugs/101>"Pull one down, 
    Patch it around</a>
    101 bugs in the code`);
});

app.get(`/bugs/:numberOfBugs`, (req, res) => {
  if (req.params.numberOfBugs >= 200) {
    res.send(`<a href="localhost:8888/bugs">Too many bugs!! Start over!</a>`);
  } else {
    res.send(`<p>${req.params.numberOfBugs} little bugs in the code, 
    ${req.params.numberOfBugs} little bugs, 
    <a href="/bugs/${
      Number(req.params.numberOfBugs) + 2
    }">Pull one down, patch it around</a>
    ${Number(req.params.numberOfBugs) + 2} little bugs in the code</p>`);
  }
});

// Project name generator
app.get(`/:verb/:adjective/:noun`, (req, res) => {
  res.send(
    `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`
  );
});

module.exports = app;
