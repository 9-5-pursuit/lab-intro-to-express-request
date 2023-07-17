const express = require("express");

const app = express();

//1.
app.get("/:verb/:adjective/:noun", (req, res) => {
    let verb = req.params.verb;
    let adjective = req.params.adjective;
    let noun = req.params.noun;
  
    res.send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
  });


//2.
  app.get("/bugs", (req, res) => {
    res.send( "<h1>99 little bugs in the code</h1><a href='./bugs/101'> Pull on down, patchit around</a>");
  });
  
  app.get("/bugs/:numberOfBugs", (req, res) => {
    const numberOfBugs = req.params.numberOfBugs;

    if (numberOfBugs >= 200) {
      res.send(`<h1>${numberOfBugs} little bugs in the code</h1><a href="/bugs">Too many bugs!! Start over!</a>`);
    }else{
      res.send(
        `<h1>${numberOfBugs} little bugs in the code</h1><a href="/bugs/${+numberOfBugs + 2}">Pull one down, patch it around</a>`
      );
    }
  });

//3.
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res, next) => {
  res.send("Welcome 99 Pokemon");
});


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
  let indexOfArray = Number(req.params.indexOfArray);

  let selectedPokemon = pokemon[indexOfArray];

  if (!selectedPokemon) {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  } else {
    res.send(selectedPokemon);
  }
});


module.exports = app;