const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>`);
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const filteredPokemon = pokemon.filter(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  if (filteredPokemon.length > 0) {
    res.send(filteredPokemon);
  } else {
    res.send([]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (indexOfArray < pokemon.length) {
    res.send(pokemon[Number(indexOfArray)]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const convertedNumOfBugs = Number(numberOfBugs);
  console.log(typeof numberOfBugs);
  if (convertedNumOfBugs < 200) {
    res.send(
      `${convertedNumOfBugs} little bugs in the code\n<a href="/bugs/${
        convertedNumOfBugs + 2
      }">Pull one down, patch it around</a>`
    );
  } else {
    res.send(`<a href="/">Too many bugs!! Start over!</a>`);
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = app;
