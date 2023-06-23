const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");
app.use(express.json());

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    "<h1>99 little bugs in the code</h1><a href='./bugs/101'>pull on down, patchit around</a>"
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs > 199) {
    res.send("<h1>Too many bugs!! Start over!</h1>");
  } else {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code</h1> <a href="./${
        Number(numberOfBugs) + 2
      }">Pull one down, patch it around</a>`
    );
  }
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  let matchedPoke = pokemon.filter((poke) => {
    return poke.name.toLowerCase() == name.toLowerCase();
  });
  res.json(matchedPoke);
});

app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params;
  if (!pokemon[index]) {
    res.send(`Sorry, no pokemon found at ${index}`);
  } else {
    res.json(pokemon[index]);
  }
});

module.exports = app;
