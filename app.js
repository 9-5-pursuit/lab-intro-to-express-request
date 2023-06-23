//DEPENDENCIES
const express = require('express');
const pokemon = require('./models/pokemon.json')

//CONFIGURATION
const app = express();

//ROUTES

//Home Page
app.get('/', (req, res) => {
    res.send('Welcome 99 Pokemon')
})


// Excercise 1
app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
})


// Excercise 2
app.get('/bugs', (req, res) => {
    res.send('99 little bugs in the code, 99 little bugs <a href=/bugs/101>pull one down patch it around</a>')
})

app.get('/bugs/:numberOfBugs', (req, res) => {
    const {  numberOfBugs } = req.params;

    if(numberOfBugs > 199){
        res.send('Too many bugs!! Start over!')
    }
    else{
        res.send(`${numberOfBugs} little bugs in the code, ${numberOfBugs} little bugs <a href=/bugs/${Number(numberOfBugs) + 2}>pull one down patch it around</a>`)
    }

})


// Excercise 3
app.get('/pokemon/search', (req, res) => {
    const { name } = req.query;
    let refinedName = name[0].toUpperCase() + name.slice(1).toLowerCase();

    let foundIndex = pokemon.findIndex((item) => {
        return item.name === refinedName;
    })

    if(foundIndex === -1){
        res.send([])
    }
    else{
        res.send([pokemon[foundIndex]]);
    }

})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params;

    if(!pokemon[indexOfArray]){
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
    else{
        res.send(pokemon[indexOfArray]);
    }
})



//EXPORT
module.exports = app;

