import express from "express"
import path from "path"
import e from "express";

// Instantiate express
const app = express()

// Allows the client to load content from the public folder
app.use(express.static("public"))

import fs from "fs"

const navComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString()
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString()

const frontPage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString()
const frontPagePage = navComponent + frontPage + footerComponent

const battle =  fs.readFileSync("./public/pages/battle/battle.html").toString()
const battlePage = navComponent + battle + footerComponent

app.get("/", (req, res) => {
    res.send(frontPagePage)

})
app.get("/battle", (req, res) => {
    const randomPokemon = "pikachu"
    res.redirect(`/battle/${randomPokemon}`)

})

app.get("/battle/:pokemonName", (req, res) => {
    res.send(battlePage)
})

app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(result => result.json())
        .then(result => res.send({data: result}))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("./public/contact/contact.html"))
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
