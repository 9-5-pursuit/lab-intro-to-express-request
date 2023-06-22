const express = require("express");
const app = express();


app.get("/:verb/:adjective:/:noun", (req,res) =>{
    res.send('Congratulations on starting a new project called ${}-${}-${}!')
} )

module.exports = app;
