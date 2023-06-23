const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");
//console.log(pokemon[0]);



app.get("/", (request, response) => {
  response.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (request, response) => {
  response.send(
    `Congratulations on starting a new project called ${request.params.verb}-${request.params.adjective}-${request.params.noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send("<h1>99 little bugs in the code</h1>");
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  const numberOfBugs = Number(request.params.numberOfBugs);

  if (numberOfBugs >= 200) {
    // res.redirect("/bugs");
    response.send("Too many bugs!! Start over!");
  } else {
    response.send(`
        <p>199 little bugs in the code</p>
        <a href="/${numberOfBugs + 2}">Pull one down, patch it around</a> 
  `);
  }
});

app.get("/pokemon", (request, response) => {
  response.send(pokemon)
});

app.get("/pokemon/search", (request, response) => {

const {name} = request.query;

    const poke = pokemon.find((p) =>  {return p.name.toLowerCase() === name.toLowerCase()})

    if (poke) {
        response.send( [poke] );
    }
    else {
        response.send( [] );
    }
    
});

app.get("/pokemon/:indexOfArray", (request, response) => {
  const { indexOfArray } = request.params;
  const poke = pokemon[indexOfArray];
  if (poke) {
    response.send(pokemon[indexOfArray]);
  } else {
    response.send(`Sorry, no pokemon found at ${indexOfArray}`);
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