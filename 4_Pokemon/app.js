import express from "express"
import path from "path"
import e from "express";

// Instantiate express
const app = express()

// Allows the client to load content from the public folder
app.use(express.static("public"))

const pokemon = {name: "Pikachu"}

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"))
})

app.get("/battle", (req, res) => {
    res.sendFile(path.resolve("./public/battle/battle.html"))
})

app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(result => result.json())
        .then(result => res.send({data: result}))
})

const PORT = process.env.PORT || 8080

console.log(process.env.PORT)

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port,", server.address().port)
})

/*
app.listen(8080, (error) => {
    console.log(error)
    console.log("Listening on port", 8080)
})*/
