const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");
//console.log(pokemon[0]);

//--------Bugs---------------------//
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
app.get("/bugs", (req, res) => {
  //let baseUrl = "http://localhost:8888/bugs/101";
  //res.send(`<h1>99 little bugs in the code</h1>`);
  res.send(`<div> 
  <p>99 little bugs in the code</p>
  <a href="/bugs">101 Pull Down, patch it around</a>
  </div>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  let NoBugs = Number(req.params.numberOfBugs);
  if (NoBugs >= 200) {
    res.send("Too many bugs!! Start over!");
  } else {
    //res.send(`${NoBugs} little bugs in the code`);
    res.send(`
    <p>199 little bugs in the code</p>
    /href.*201.*Pull one down\, patch it around/
    `);
    // <a href="/${NoBugs + 2}">Pull one down, patch it all around</a>
    //res.send(`<a href=${NoBugs + 2}>Pull one down, patch it all around</a>`);
    //console.log(`${NoBugs} little bugs in the code`);
  }

  // let addNumberOfBugs = NoBugs + 2;
  // if (addNumberOfBugs >= 300) {
  //   res.redirect("/bugs");
  // } else {
  //   res.send(
  //     `<div><p>${NoBugs} little bugs in the code</p><a href=/bugs/${addNumberOfBugs}>Pull one down, patch it around</a></div>`
  //   );
  // }
});

app.get("/:verb/:adjective/:noun", (request, response) => {
  let verb = request.params.verb;
  let adjective = request.params.adjective;
  let noun = request.params.noun;

  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

//----------------------Pokemon----------------------//
app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});
app.get("/pokemon/search", (req, res) => {
  let querySearch = req.query.name;
  const foundPokemon = pokemon.find((item) => {
    let configuredItem = item.name.toLowerCase();
    return configuredItem === querySearch.toLowerCase();
  });
  //console.log(foundPokemon);
  //console.log(req.query.name);
  if (foundPokemon) {
    res.json([foundPokemon]);
  } else {
    res.json([]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  let userIndex = Number(req.params.indexOfArray);
  //console.log(userIndex);

  let searchInd = pokemon[userIndex];
  if (!searchInd) {
    res.send(`Sorry, no pokemon found at ${userIndex}`);
  } else {
    res.json(searchInd);
  }
});

module.exports = app;
