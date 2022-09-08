const express = require("express")
const app = express()
const weaponsList = {
        "ak": {
            "name": "ak47",
            "rounds": 30,
            "price" : 3000
        },
        "colt": {
            "name": "Colt",
            "rounds": 35,
            "price": 3500

        }
}

app.get("/",(req, res) => {
    res.send({
        message: "Welcome to my REST API for Weapons"
    })
})

// Path variable
app.get("/weapons/:id", (req, res) => {
    Number(req.params.id) === 1 ? res.send({Weapon: "AK47", GOAT: true}) : res.send({errorMessage: `No weapon with given id: ${req.params.id}`})

})
// Query String
app.get("/weapons", (req, res) => {
    res.send({
        message: `Info about ${req.query.model}`
    })
})

app.listen(8080, () => {
    console.log("Listening on port",8080)
})


