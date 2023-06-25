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

module.exports = app;
