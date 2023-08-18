const express = require("express")


const app = express();


app.get ("/", (req,res) => {
  
  res.send(`Welcome 99 Pokemon`)
})

app.get ("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun} = req.params;
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)

})
app.get ("/bugs", (req,res) => {
  bugsInCode=99
  res.send(`99 little bugs in the code \n
  <a href="/bugs/${99+2}">Pull one down, patch it around</a>`)
  
  
})
app.get("/bugs/:bugsInCode", (req, res) => {
    bugsInCode = (req.params.bugsInCode)
    if (bugsInCode >= 200) {
      res.send(`<a href="/">Too many bugs!! Start over!!</a>`)
      
    }
    res.send(`${bugsInCode} little bugs in the code \n
    <a href="/bugs/${Number(bugsInCode)+2}">Pull one down, patch it around</a>`)
    
  });


  const pokemon = require("./models/pokemon.json")
  
app.get("/pokemon", (req,res) => {
  res.send(pokemon)
})

app.get('/pokemon/search', (req, res) => {
  const { name } = req.query;
  if (!name ) {
    res.send([]);
  }
  const foundPokemon = pokemon.find((p) => {
    return (p.name.toLowerCase() === name.toLowerCase());
  });
  if (!foundPokemon ) {
    res.send([]);
  } else {
    res.send([foundPokemon]);
  }
});
app.get("/pokemon/:pokemonIndex", (req, res) => {
  if(!(pokemon[req.params.pokemonIndex])){
    res.send(`Sorry, no pokemon found at ${req.params.pokemonIndex}`)
  }
  res.send(pokemon[req.params.pokemonIndex])
})
  
module.exports = app