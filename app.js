const express = require(`express`);

const app = express();

// 99 little bugs in the code
app.get(`/bugs`, (req, res) => {
  res.send(`<p>99 little bugs in the code, 
    99 little bugs, 
    <a href="localhost:8888/bugs/101">Pull one down, 
    Patch it around</a>
    101 bugs in the code</p>`);
});

app.get(`/bugs/:numberOfBugs`, (req, res) => {
  if (req.params.numberOfBugs >= 200) {
    res.send(`<p>${req.params.numberOfBugs} little bugs in the code, 
    ${req.params.numberOfBugs} little bugs, 
    <a href="localhost:8888/bugs">Too big stack, 
    Rolling it back,</a>
    99 bugs in the code</p>`);
  } else {
    res.send(`<p>${req.params.numberOfBugs} little bugs in the code, 
    ${req.params.numberOfBugs} little bugs, 
    <a href="localhost:8888/bugs/${
      Number(req.params.numberOfBugs) + Number(2)
    }">Pull one down, 
    Patch it around</a>
    ${Number(req.params.numberOfBugs) + Number(2)} bugs in the code</p>`);
  }
});

// Project name generator
app.get(`/:verb/:adjective/:noun`, (req, res) => {
  res.send(
    `Congratulations on starting a new project called 
    ${req.params.verb}-${req.params.adjective}-${req.params.noun}`
  );
});

module.exports = app;
