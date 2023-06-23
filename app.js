const express = require("express");
const app = express();
const morgan = require("morgan");


// - - - CONTROLLERS - - -
const bugController = require("./controllers/bugController");
const nameGenController = require("./controllers/nameGenController");
const pokemonController = require("./controllers/pokemonController");

app.use(morgan("dev"));
app.use("/", nameGenController);
app.use("/bugs", bugController);
app.use("/pokemon", pokemonController);

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

module.exports = app;
