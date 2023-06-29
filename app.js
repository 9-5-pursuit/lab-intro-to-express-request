const express = require("express");

const app = express();

const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

let bugsCount = 99;


app.get("/", (req, res) => {
  const welcomeMessage = "Welcome 99 Pokemon";
  res.send(welcomeMessage);
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const verb = req.params.verb;
  const adjective = req.params.adjective;
  const noun = req.params.noun;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});


app.get("/bugs", (req, res) => {
  res.send("<h1>99 little bugs in the code</h1>");
});


app.get("/bugs/:numOfBugs", (req, res) => {
  const num = req.params.numOfBugs;
  const toSend = `<h1>${num} little bugs in the code</h1><a href="/bugs/${
    +num + 2
  }">Pull one down, patch it around</a>`;
  if (num >= 200) {
    res.send(
      `<h1>${num} little bugs in the code</h1><a href="/bugs">Too many bugs!! Start over!</a>)`
    );
  }
  res.send(toSend);
});


app.get("/pokemon", (req, res) => {
  res.send(pokemon);
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
  let indexOfArray = Number(req.params.indexOfArray);

  let selectedPokemon = pokemon[indexOfArray];

  if (!selectedPokemon) {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  } else {
    res.send(selectedPokemon);
  }
});


module.exports = app;
