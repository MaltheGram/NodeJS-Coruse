import express from "express"
import path from "path"

// Instantiate express
const app = express()

// Allows the client to load content from the public folder
app.use(express.static("public"))

const pokemon = {name: "Pikachu"}

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage.html"))
})

app.get("/pokemon", (req, res) => {
    res.send({data: pokemon})
})


app.listen(8080, (error) => {
    console.log(error)
    console.log("Listening on port", 8080)
})