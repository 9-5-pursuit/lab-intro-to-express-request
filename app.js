const express = require("express");
const logger = require("morgan")
const pokemon = require('./models/pokemon.json')

const app = express()

app.use(logger("dev"))
app.use(express.json())



app.get('/', (req,res)=> {
    res.send('Hi :)')
})
app.get('/:verb/:adjective/:noun', (req,res)=> {
    let verb = req.params.verb
    let adjective = req.params.adjective
    let noun = req.params.noun

    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get('/bugs', (req,res) => {
    res.send('99 little bugs in the code' + "<br>" + "<a href='/bugs/101'>pull one down, patch it around</a>")
})
app.get('/bugs/:bugsleft', (req,res) => {
    const bugsLeft = req.params.bugsleft
    if(bugsLeft >= 200){
        res.redirect('/bugs')
    }
    res.send(`${bugsLeft} little bugs in the code`)
})
app.get('/pokemon', (req,res) => {
    res.send(pokemon)
})
app.get('/pokemon/search', (req, res) => {
    const name = req.query.name
    const pokemonObj = pokemon.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase())
    res.send(pokemonObj)
})
app.get('/pokemon/:indexOfArray', (req,res) => {
    if(!pokemon[req.params.indexOfArray]){
        res.send(`sorry, no pokemon found at /pokemon/${req.params.indexOfArray}`)
    }
    res.send(pokemon[req.params.indexOfArray])
})
app.get('/pokemon-pretty/', (req, res) => {
    const listOfPokemons = pokemon.map(obj => {
        const pokemonIndex = pokemon.findIndex(x => x.name === obj.name)
        return `<a href="/pokemon-pretty/${pokemonIndex}">${obj.name}</a><br>`
    })
    res.send(listOfPokemons.join(' '))
})
app.get('/pokemon-pretty/:indexOfArray', (req, res) => {
    // TODO: Add correct format
    const pokemonObj = pokemon[req.params.indexOfArray]
    res.send(`<h1>${pokemonObj.name}</h1><br><img src="${pokemonObj.img}"/><br><h2>Type: ${pokemonObj.type}</h2>`)
})

module.exports = app;