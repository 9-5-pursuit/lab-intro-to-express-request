require('dotenv').config();
const express = require('express');
const poke = require('./models/pokemon.json')
const app = express();

const pokemon = require("./models/pokemon.json");

app.get('/', (req, res) => {
    res.send("Welcome 99 Pokemon")
})
app.get('/bugs', (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1><a href='http://localhost:8888/bugs/101'>pull on down, patch it around</a>`)
})

app.get('/bugs/:id', (req, res) => {

    if (+req.params.id > 199) {
        res.status(404).send({message: "Too many bugs!! Start over!"})
    }
    res.status(201).send(
        `${req.params.id} little bugs in the code\n<a href='http://localhost:8888/bugs/${+req.params.id + 2}'>Pull one down, patch it around</a>`
    )
})

app.get('/pokemon', (req, res) => {

    res.json(
        poke
    )
})
app.get('/pokemon/:id', (req, res) => {

    let foundIndex = poke.findIndex((item, i) => {
        return i == +req.params.id
    })
    if (foundIndex == -1) {
        res.status(404).send('Sorry, no pokemon found at ' + req.params.id)
    }
    res.status(201).json(
        poke[+req.params.id]
    )
})
app.get('/pokemon/search', (req, res) => {

    let found = poke.find((item) => item.name.toLowerCase() == req.body.name.toLowerCase())
    if (!found) {
        res.status(404).json([])
    }
    res.status(201).json(
        found
    )
})

module.exports = app