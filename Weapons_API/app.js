import express from "express"
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const weapons = [
    { name: "AK-47", price: 3500 },
    { name: "COLT", price: 3000 }
]



//app.use(express.json())

// Get

// Root
app.get("/",(req, res) => {
    res.send({
        message: "Welcome to my REST API for Weapons"
    })
})

// Path variable
app.get("/weapons/:id", (req, res) => {
    Number(req.params.id) === 1 ? res.send(weapons[0]) : res.send({errorMessage: `No weapon with given id: ${req.params.id}`})

})
// Query String --> req.query
app.get("/weapons", (req, res) => {
    res.send({
        data: weapons
    })
})

// Post

app.post("/weapons", (req, res) => {
    const weapon = {
        name: req.body.name,
        price: req.body.price
    }
    console.log(weapon)
    weapons.push(weapon)
})

// Update
app.put("/weapons/:id",(req,res) => {
    let id = req.params.id
    const weapon = {
        name: req.body.name,
        price: req.body.price
    }
    console.log(weapon)
    weapons.splice(id,0,weapon)
})

// Delete
app.delete("/weapons/:id", (req, res) => {
    let id = req.params.id
    console.log(id)
    weapons.splice(id,1)
})

app.listen(8080, () => {
    console.log("Running on port",8080)
})


