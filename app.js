const express = require("express");

const app = express();

const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  let verb = req.params.verb;
  let adjective = req.params.adjective;
  let noun = req.params.noun;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send(`
<p>99 little bugs in the code</p>
<a href="/bugs/101">Pull one down, Patch it around</a>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  let numberOfBugs = req.params.numberOfBugs;
  if (numberOfBugs < 200) {
    res.send(
      numberOfBugs +
        " little bugs in the code" +
        "<br>" +
        `<a href="
/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`
    );
  }
  if (numberOfBugs >= 200) {
    res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`);
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  let queryName = req.query.name;

  let foundPokemon = null;

  pokemon.forEach((item) => {
    if (item.name.toLowerCase() === queryName.toLowerCase()) {
      foundPokemon = item;
    }
  });

  if (!foundPokemon) {
    res.send([]);
  } else {
    res.send([foundPokemon]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  let indexOfArray = req.params.indexOfArray;

  if (pokemon[indexOfArray]) {
    res.json(pokemon[indexOfArray]);
  } else {
    res.send("Sorry, no pokemon found at " + indexOfArray);
  }
});

module.exports = app;
