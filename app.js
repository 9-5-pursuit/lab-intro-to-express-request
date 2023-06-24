const express = require("express");

const app = express();

const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send("<h1>99 little bugs in the code</h1>");
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const numberOfBugs = Number(req.params.numberOfBugs);

  if (numberOfBugs >= 200) {
    res.send("Too many bugs!! Start over!");
  } else {
    const newNumberOfBugs = numberOfBugs + 2;
    res.send(`${numberOfBugs} little bugs in the code<br>
        <a href="/bugs/${newNumberOfBugs}">Pull one down, patch it around</a>`);
  }
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
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
    res.send("[]");
  } else {
    res.json([foundPokemon]);
  }
});

app.get("/pokemon/:index", (req, res) => {
  const index = req.params.index;

  if (!pokemon[index]) {
    res.send(`Sorry, no pokemon found at ${index}`);
  } else {
    res.json(pokemon[index]);
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  let verb = req.params.verb;
  let adjective = req.params.adjective;
  let noun = req.params.noun;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = app;
