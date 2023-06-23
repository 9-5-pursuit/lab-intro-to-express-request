const express = require("express");
const app = express();
const morgan = require("morgan");
const pokemon = require("./models/pokemon.json");

// - - - CONTROLLERS - - -
const bugController = require("./controllers/bugController");
const nameGenController = require("./controllers/nameGenController");

app.use(morgan("dev"));
app.use("/", nameGenController);
app.use("/bugs", bugController);

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

// Poke-Express
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const queried = req.query.name.toLowerCase();
  const foundPokemon = pokemon.filter(
    ({ name }) => queried === name.toLowerCase()
  );
  const message = foundPokemon ? foundPokemon : `Sorry, didn't "Catch Em' All"`;

  // if (!foundPokemon) {
  //     res.send(`Sorry, didn't "Catch Em All"`);
  // } else {
  //     res.send(foundPokemon);
  // }
  res.send(message);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  let { indexOfArray } = req.params;
  let foundPokemon = pokemon[indexOfArray];

  if (!foundPokemon) {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  } else {
    res.send(foundPokemon);
  }
});

module.exports = app;
