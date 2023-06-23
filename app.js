const express = require("express");
const pokemon = require(`./models/pokemon.json`);

const app = express();

app.get("/", (req, res) => {
  res.send(`Welcome 99 Pokemon`);
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  const message = `${verb}-${adjective}-${noun}`;
  res.send(`Congratulations on starting a new project called ${message}!`);
});

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>`);
});

app.get("/bugs/:bugNumber", (req, res) => {
  const inputBugNumber = Number(...Object.values(req.params));

  if (inputBugNumber >= 200) {
    res.send(`<a href="/">Too many bugs!! Start over!</a>`);
  } else {
    res.send(
      `${inputBugNumber} little bugs in the code\n<a href="/bugs/${
        inputBugNumber + 2
      }">Pull one down, patch it around</a>`
    );
  }
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get(`/pokemon/search`, (req, res) => {
  const pokeName = req.query.name;

  const matchingPokemon = pokemon.find((item) => {
    return item.name.toLowerCase() === pokeName.toLowerCase();
  });

  if (matchingPokemon) {
    res.json([matchingPokemon]);
  } else {
    res.json([]);
  }
});

app.get(`/pokemon/:index`, (request, response) => {
  const inputIndexNum = Number(request.params.index);

  const matchingPokemonIndex = pokemon.find((item, index) => {
    return inputIndexNum === index;
  });

  if (matchingPokemonIndex) {
    response.json(matchingPokemonIndex);
  } else {
    response.send(`Sorry, no pokemon found at ${inputIndexNum}`);
  }
});

module.exports = app;
