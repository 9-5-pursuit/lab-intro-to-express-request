const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");

app.use(express.json());

app.get("/:verb/:adjective/:noun", (request, response) => {
    let verb = request.params.verb;
    let adjective = request.params.adjective;
    let noun = request.params.noun;
  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/", (request, response) => {
    response.send("Welcome 99 Pokemon");
});

app.get("/bugs", (request, response) => {
    let numberOfBugs = 99;
    let linkText = "Pull one down, patch it around";
    let linkUrl = "/bugs/101"

    if (numberOfBugs >= 200) {
        linkText = "Too many bugs!! Start over!";
        linkUrl = "/bugs"
    }
  response.send(`<h1>${numberOfBugs} little bugs in the code<h1>` + `<a href="${linkUrl}">${linkText}</a>`);
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  let numberOfBugs = parseInt(request.params.numberOfBugs);
  let linkText = "Pull one down, patch it around";
  let linkUrl = `/bugs/${numberOfBugs + 2}`;

  if (numberOfBugs >= 200) {
    linkText = "Too many bugs!! Start over!";
    linkUrl = "/bugs";
  }

  response.send(
    `<h1>${numberOfBugs} little bugs in the code</h1>` +
      `<a href="${linkUrl}">${linkText}</a>`
  );
});

app.get("/pokemon", (request, response) => {
    response.send(pokemon)
})

app.get("/pokemon/search", (request, response) => {
  let search = request.query.name.toLowerCase();

  //Filter returns a new array
  let foundPokemon = pokemon.filter((p) => p.name.toLowerCase() === search);

  if (foundPokemon.length > 0) {
    response.json(foundPokemon);
  } else {
    response.json([]);
  }
});

app.get("/pokemon/:index", (request, response) => {
    let index = parseInt(request.params.index);

  if (index >= 0 && index < pokemon.length) {
    response.send(pokemon[index]);
  } else {
    response.send
    (`Sorry, no pokemon found at ${index}`);
  }
});

module.exports = app;