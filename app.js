//no need to write a file path if you are bringing a package
const express = require("express");
const pokemon = require("./models/pokemon.json");
//console.log(pokemon[1]);
const app = express();

app.get("/", (req, res) => {
  res.send(`Welcome 99 Pokemon`);
});

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>`);
});

app.get("/bugs/200", (req, res) => {
  res.send(`<a href=''>Too many bugs!! Start over!</a>`);
});

app.get("/bugs/199", (req, res) => {
  res.send(
    `199 little bugs in the code\n<a href="/bugs/201">Pull one down, patch it around</a>`
  );
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

//request params /whatever the user writes will be the value of :pokename
app.get(`/pokemon/search`, (req, res) => {
  const pokeName = req.query.name;
  //console.log(pokeName);
  const filteredPokemon = pokemon.filter(
    (poke) => poke.name.toLowerCase() === pokeName.toLowerCase()
  );
  res.json(filteredPokemon);
});

app.get("/pokemon/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < pokemon.length) {
    res.json(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

app.get("/:jumping/:highest/:bunny", (req, res) => {
  const { jumping, highest, bunny } = req.params;
  const message = `Congratulations on starting a new project called ${jumping}-${highest}-${bunny}!`;
  res.send(message);
});

module.exports = app;
