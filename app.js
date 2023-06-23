const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    let params = req.params

    res.send(`Congratulations on starting a new project called ${params.verb}-${params.adjective}-${params.noun}!`)
})

app.get("/bugs", (req, res) => {
    let newBugs = 101

    let bugsHTMLString = `
        <p>99 little bugs in the code</p>
        <p>99 little bugs</p>
        <a href="http://localhost:8888/bugs/101">Pull one down<br>Patch it around</a>
        <p>101 bugs in the code</p>
    `

    res.send(bugsHTMLString)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    let numberBugs = Number(req.params.numberOfBugs)

    let bugsHTMLString = `
        <p>${numberBugs} little bugs in the code</p>
        <p>${numberBugs} little bugs</p>
        <a href="http://localhost:8888/bugs/${numberBugs + 2}">Pull one down<br>Patch it around</a>
        <p>${numberBugs + 2} bugs in the code</p>
    `
    if (numberBugs >= 200) {
        let bugsHTMLString2 = `
        <p>${numberBugs} little bugs in the code</p>
        <p>${numberBugs} little bugs</p>
        <a href="http://localhost:8888/bugs">Too many bugs!! Start over!</a>
        <p>${numberBugs + 2} bugs in the code</p>
        `

        res.send(bugsHTMLString2)
    } else {
        res.send(bugsHTMLString)
    }

})

const pokemon = require("./models/pokemon.json")

app.get("/pokemon", (req, res) => {
    res.send(pokemon.map((item) => {
        return item;
    }))
})

app.get("/pokemon/search", (req, res) => {
    if (req.query.name) {
        pokemon.map((item) => {
            if (item.name.toLowerCase() === req.query.name.toLowerCase()) {
                res.send([item]) 
            } else {
                res.send([])
            }
        })
    } else {
        res.send([])
    }
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    if (pokemon[req.params.indexOfArray]) {
        res.send(pokemon[req.params.indexOfArray])
    } else {
        res.status(404).send(`Sorry, no pokemon found at ${req.params.indexOfArray}`)
    }
})

// app.get("/pokemon-pretty", (req, res) => {
//     res.send(
//         `
//             <h1>${pokemon[0].name}</h1>
//             <a href="http://localhost:8888/pokemon-pretty/${0}">Individual View</a>
//         `
//     )
// })

// app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
//     pokemon.forEach((item, index) => {
//         if (index === req.params.indexOfArray) {
//             res.send(`
//             <h1>${item.name}</h1>
//             <img src=${item.img} alt=${item.name} />
//             <a href="http://localhost:8888/pokemon-pretty/">All View</a>
//             `)
//         }
//     })
// })

module.exports = app;