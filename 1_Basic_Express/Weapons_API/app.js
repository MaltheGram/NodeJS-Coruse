const express = require("express")
const app = express()

app.get("/",(req, res) => {
    res.send({
        message: "Welcome to my REST API for Weapons"
    })
})

// Path variable

app.get("/weapons/:id", (req, res) => {
    if (Number(req.params.id) === 1){
        res.send({
            Weapon: "AK47",
            GOAT: true
        })
    }
})

// Query String
app.get("/weapons", (req, res) => {
    res.send({
        message: "Information about weapon",
        Weapon: req.query
    })
})

app.listen(8080, () => {
    console.log("Listening on port",8080)
})

