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
app.get('/pokemon/:indexOfArray', (req,res) => {
    if(!pokemon[req.params.indexOfArray]){
        res.send(`sorry, no pokemon found at /pokemon/${req.params.indexOfArray}`)
    }
    res.send(pokemon[req.params.indexOfArray])
})

module.exports = app;