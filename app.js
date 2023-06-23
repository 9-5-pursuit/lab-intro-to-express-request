const express = require('express');
const logger = require('morgan');
const pokemon = require('./models/pokemon.json');

const app = express();

// Middleware
app.use(logger('dev'));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

app.get('/bugs', (req, res) => {
  res.send('<h1>99 little bugs in the code</h1>');
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;

  if (+numberOfBugs >= 200) {
    res.send("<a href='/bugs/'>Too many bugs!! Start over!</a>");
  } else {
    const newNumberOfBugs = +numberOfBugs + 2;
    res.send(
      `<a href='/bugs/${newNumberOfBugs}'>Pull one down, patch it around</a>${numberOfBugs} little bugs in the code`
    );
  }
});

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

app.get('/pokemon/search', (req, res) => {
  const { name } = req.query;
  const matchingPokemon = pokemon.filter(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  res.send(matchingPokemon);
});

app.get('/pokemon/:index', (req, res) => {
  const { index } = req.params;
  const i = +index;
  if (i >= 0 && i < pokemon.length) {
    res.send(pokemon[i]);
  } else {
    res.send(`Sorry, no pokemon found at ${i}`);
  }
});

app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  const projectName = `${verb}-${adjective}-${noun}`;
  res.send(`Congratulations on starting a new project called ${projectName}!`);
});

module.exports = app;
