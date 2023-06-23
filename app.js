const express = require("express");

const pokemon = require("./models/pokemon.json");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    '<h1>99 little bugs in the code</h1> <a href="/bugs/101">pull one down, patch it around</a>'
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const numberOfBugs = Number(req.params.numberOfBugs);

  const bugs = numberOfBugs + 2;
  console.log(bugs);

  if (numberOfBugs >= 200) {
    res.send('<a href="/bugs">Too many bugs!! Start over!</a>');
  } else {
    res.send(
      `${numberOfBugs} little bugs in the code <a href="/bugs/${bugs}">pull one down, patch it around</a>`
    );
  }
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const name = req.query.name;

  let foundPokemon = pokemon.find((item) => {
    return name.toLowerCase() === item.name.toLowerCase();
  });

  if (foundPokemon) {
    res.json([foundPokemon]);
  } else {
    res.send([]);
  }
});

app.get("/pokemon/:index", (req, res) => {
  const index = req.params.index;

  if (pokemon[index]) {
    res.json(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});
module.exports = app;
