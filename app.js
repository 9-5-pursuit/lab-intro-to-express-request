//whener bringing in a package you could just name the package
//whenever bringing in a file make sure to use the relative path

//Bring in Express
const express = require("express");
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

//call the express function and assign it to the variable app
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(`99 little bugs in the code`);
});

app.get("/bugs/:bugNumber", (req, res) => {
  const bugNumber = Number(...Object.values(req.params));
  //req.params itself is an object
  if (bugNumber >= 200) {
    res.send(`<a href="/">Too many bugs!! Start over!</a>`);
  } else {
    res.send(
      `${bugNumber} little bugs in the code\n<a href="/bugs/${
        bugNumber + 2
      }">Pull one down, patch it around</a>`
    );
  }
});

app.get("/bugs/199", (req, res) => {
  const bugNumber = res.send(
    `${bugNumber} little bugs in the code\n<a href="/bugs/201"/>Pull one down, patch it around</a>`
  );
});

app.get("/pokemon", (req, res) => {
  const pokemonList = pokemon.forEach((item) => {
    res.send(pokemon);
  });
  //   console.log(pokemon);
  //   res.json(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const name = req.query.name;
  const foundName = pokemon.filter((item) => {
    return item.name.toUpperCase() === name.toUpperCase();
  });
  res.send(foundName);
  //   if (foundName) {
  //     res.send(foundName)
  //   }else{
  //     res.send([])
  //   }

  //   console.log(name);
});

app.get("/pokemon/:index", (req, res) => {
  const index = +req.params.index;
  //this is whatever the user inputs

  if (pokemon[index]) {
    res.json(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }

  //   console.log(index);
  //  for (let i = 0; i < pokemon.length; i++) {
  //     if(index === i){
  //         return pokemon[i]
  //     }
  // }
});

// app.get("/jumping/joyous/jellybean", (req, res) => {
//   res.send(
//     `Congratulations on starting a new project called jumping-joyous-jellybean`
//   );
// });

//Define the route with parameters
app.get(`/:verb/:adjective/:noun`, (req, res) => {
  //Extract the parameters from the request object
  const verb = req.params.verb;
  const adjective = req.params.adjective;
  const noun = req.params.noun;

  //Send a response with the extracted parameters
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = app;
