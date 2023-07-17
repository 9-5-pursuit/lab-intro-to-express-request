const express = require("express");
const app = express();
const morgan = require("morgan");
const pokemon = require("./models/pokemon.json");

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  res.send(
    `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    "<h1>99 little bugs in the code</h1> <a href='./bugs/101'>pull one down, patch it around</a>"
  );
});


app.get("/bugs/:numberOfBugs", (req, res) => {
  const {numberOfBugs} = req.params;

  if (Number(numberOfBugs) >= 200) {
    res.send(`<a href="/">Too many bugs!! Start over!</a>`);
  } else {
    res.send(
      `${Number(numberOfBugs)} little bugs in the code<a href="/bugs/${
        Number(numberOfBugs) + 2
      }">Pull one down, patch it around</a>`
    );
  }
});


app.get("/pokemon", (request, response) => {
  response.send(pokemon);
});

app.get("/pokemon/search", (request, response) => {
  const { name } = request.query;

  const poke = pokemon.find((p) => {
    return p.name.toLowerCase() === name.toLowerCase();
  });

  if (!poke) {
    response.send([]);
  } else {
    response.send([poke]);
  }
});

app.get("/pokemon/:index", (request, response) => {
  const indexOf = Number(request.params.index);

  const pokemonIndex = pokemon.find((item, index) => {
    return indexOf === index;
  });

 if (!pokemonIndex) {
   response.send(`Sorry, no pokemon found at ${indexOf}`);
 } else {
   response.send(pokemonIndex);
 }

});

module.exports = app;99
