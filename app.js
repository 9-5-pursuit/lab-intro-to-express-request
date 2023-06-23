const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  const projectName = `${verb}-${adjective}-${noun}`;
  res.send(`Congratulations on starting a new project called ${projectName}!`);
});

app.get("/bugs", (req, res) => {
  res.send(
    "99 little bugs in the code<br><a href='/bugs/101'>Pull one down, patch it around</a>"
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const numberOfBugs = parseInt(req.params.numberOfBugs);
  if (numberOfBugs >= 200) {
    res.send("Too many bugs!! Start over!");
  } else {
    const nextBugs = numberOfBugs + 2;
    res.send(
      `${numberOfBugs} little bugs in the code<br><a href='/bugs/${nextBugs}'>Pull one down, patch it around</a>`
    );
  }
});

const pokemon = require("./models/pokemon.json");

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
    res.send([]);
  } else {
    res.send([foundPokemon]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const index = parseInt(req.params.indexOfArray);
  if (index >= 0 && index < pokemon.length) {
    res.json(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

module.exports = app;
