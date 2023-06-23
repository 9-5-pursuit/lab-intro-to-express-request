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

app.get("/bugs", (request, response) => {
  response.send("99 little bugs in the code");
});

app.get("/bugs/:numberOfBugs", (request, response) => {

    if (request.params.numberOfBugs > 199) {
        
        response.send("Too many bugs!! Start over!"
        
        );
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



module.exports = app;