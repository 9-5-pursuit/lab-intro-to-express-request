const express = require("express");
const logger = require("morgan");
const app = express();
const pokemon = require("./models/pokemon.json");
app.use(logger("dev"));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(
        `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
});
app.get("/bugs", (req, res) => {
    res.send(
        "<h1>99 little bugs in the code</h1><a href='./bugs/101'>pull on down, patch it around</a>"
    );
});
app.get("/bugs/:bugs", (req, res) => {
    const { bugs } = req.params;
    if (bugs > 199) {
        res.send({ message: "Too many bugs!! Start over!" });
    } else {
        res.send(
            `${bugs} little bugs in the code\n<a href='./${
                Number(bugs) + 2
            }'>Pull one down, patch it around</a>`
        );
    }
});
app.get("/pokemon", (req, res) => {
    res.json(pokemon);
});
app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;

    let foundPokemon = pokemon.find(
        (item) => item.name.toLowerCase() == name.toLowerCase()
    );

    if (!foundPokemon) {
        res.json([]);
    } else {
        res.json([foundPokemon]);
    }
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
