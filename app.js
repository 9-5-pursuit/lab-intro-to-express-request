const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");
const link = `<a href="/bugs/101">pull one down, patch it around a/>`;

app.get("/", (request, response) => {
  response.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (request, response) => {
  const { verb, adjective, noun } = request.params;
  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (request, response) => {
  response.send(`<h1> 199 little bugs in the code</h1> ${link}`);
});
app.get("/bugs/:numberOfBugs", (request, response) => {
  const { numberOfBugs } = request.params;
  if (numberOfBugs < 200) {
    response.send(
      `<h1> ${numberOfBugs} little bugs in the code </h1><a href=/"bugs/${
        Number(numberOfBugs) + 2
      }">Pull one down, patch it around</a>`
    );
  } else {
    response.send(`<a href="/bugs">"Too many bugs!! Start over!</a>`);
  }
});

app.get("/pokemon", (request, response) => {
  response.json(pokemon);
});

app.get("/pokemon/search", (request, response) => {
  let queryName = request.query.name;

  let foundPokemon = null;

  pokemon.forEach((item) => {
    if (item.name.toLowerCase() === queryName.toLowerCase()) {
      foundPokemon = item;
    }
  });

  if (!foundPokemon) {
    response.send([]);
  } else {
    response.send([foundPokemon]);
  }
});

app.get("/pokemon/:index", (request, response) => {
  const { index } = request.params;
  if (pokemon[index]) {
    response.send(pokemon[index]);
  } else {
    response.send(`Sorry, no pokemon found at ${index}`);
  }
});

module.exports = app;
