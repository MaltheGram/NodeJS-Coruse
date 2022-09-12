import express from "express"
import { logConsole } from "./Utils.js";
const app = express()

const weapons = {
        1: {
            "name": "ak47",
            "rounds": 30,
            "price" : 3000
        },
        2: {
            "name": "Colt",
            "rounds": 35,
            "price": 3500

        }
}

app.use(express.json())
// Root
app.get("/",(req, res) => {
    res.send({
        message: "Welcome to my REST API for Weapons"
    })
})

// Path variable
app.get("/weapons/:id", (req, res) => {
    Number(req.params.id) === 1 ? res.send({Weapon: "AK47", GOAT: true}) : res.send({errorMessage: `No weapon with given id: ${req.params.id}`})

})
// Query String --> req.query
app.get("/weapons", (req, res) => {
    res.send({
        data: weapons
    })
})


app.listen(8080, () => {
    logConsole(8080)
})


