const express = require("express");
const router = express.Router();
const pokemon = require("../models/pokemon.json");

// Poke-Express
router.get("/", (req, res) => {
  res.send(pokemon);
});

router.get("/search", (req, res) => {
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

router.get("/:indexOfArray", (req, res) => {
  let { indexOfArray } = req.params;
  let foundPokemon = pokemon[indexOfArray];

  if (!foundPokemon) {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  } else {
    res.send(foundPokemon);
  }
});

module.exports = router;
