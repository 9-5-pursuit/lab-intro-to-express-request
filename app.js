const express = require("express");
const app = express();

app.use(express.json());

app.get("/:verb/:adjective/:noun", (request, response) => {
    let verb = request.params.verb;
    let adjective = request.params.adjective;
    let noun = request.params.noun;
  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = app;