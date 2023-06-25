const express = require("express")

const app = express();

const pokemon = require("./models/pokemon.json")


app.get("/", (req, res)=>{
    res.send("Welcome 99 Pokemon")
})
app.get("/bugs", (req, res)=>{
    res.send("99 little bugs in the code")
})

app.get("/bugs/:numberofBugs", (req, res)=>{
    const numberOfBugs = Number(req.params.numberofBugs);

    
    if (numberOfBugs >= 200){
        res.send("Too many bugs!! Start over!")
    }else{
        res.send(`<div>
        <p>
        199 little bugs in the code
        </p>
        <a href ="/${numberOfBugs+2}">Pull one down, patch it around</a>
        </div>`);
    }
});
app.get("/pokemon", (req, res)=>{

    res.json(pokemon)
  
})

app.get("/pokemon/search", (req, res)=>{
    let queryName = req.query.name;

    let foundPokemon = null;

    pokemon.forEach((item)=>{
        
        if(item.name.toLowerCase() === queryName.toLowerCase()){
            foundPokemon = item;
        }


    })

       if(!foundPokemon){
        res.send([])
       } else{
        res.send([foundPokemon])
       }

})

app.get("/pokemon/:indexOfArray", (req, res) =>{
    let indexOfArray = Number(req.params.indexOfArray);

    let selectedPokemon = pokemon[indexOfArray]

    if(!selectedPokemon){
        res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }else{
        res.send(selectedPokemon)
    }
})
app.get("/:verb/:adjective/:noun", (req, res)=>{
    let verb = req.params.verb;
    let adjective = req.params.adjective;
    let noun = req.params.noun;

    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})
       
module.exports = app