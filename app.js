const express = require("express");
const app = express();

// - - - CONTROLLERS - - -
const bugController = require("./controllers/bugController");
const nameGenController = require("./controllers/nameGenController");

app.use("/", nameGenController);
app.use("/bugs", bugController);

app.get("/", (req, res) => {
  res.send("WASSAAAAAAAAAP");
});

// Poke-Express

module.exports = app;
