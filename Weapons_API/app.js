import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from 'uuid';
import {logConsole} from "./Utils.js";

uuidv4()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

let weapons = [
    { id: uuidv4(), name: "AK-47", price: 3500 },
    { id: uuidv4(), name: "COLT", price: 3000 },
    { id: uuidv4(), name: "RPG", price: 6000 },
    { id: uuidv4(), name: "Knife", price: 300 }
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
app.get("/api/weapons/:id", (req, res) => {
    const id = req.params.id
    const findWeapon = weapons.find((weapon => weapon.id === id))
    findWeapon ? res.send(findWeapon) : res.status(404).send({errorMessage: `No weapon with given id ${id} exists`})


})
// Query String --> req.query
app.get("/api/weapons", (req, res) => {
    res.send({data: weapons})
})

// Post
app.post("/api/weapons", (req, res) => {
    const weapon = req.body
    weapon.id = uuidv4()

    weapons.push(weapon)
    res.send(`Created new weapon: ${weapon.name}`)
})

// Update the entire resource (ID should be left untouched as this should be incremental from the database).
// For testing purpose we leave it in

app.put("/api/weapons/:id",(req,res) => {
    const id = req.params.id
    const weaponToPatch = weapons.find((weapon) => weapon.id === id)
    const {name, price} = req.body


    weaponToPatch.name = name ? name : weapons[id].name
    weaponToPatch.price = price ? price : weapons[id].price

    res.send(`Weapon with id ${id} has been updated`)
})


// Patch a single or multiple fields
app.patch("/api/weapons/:id", (req,res) => {
    const id = req.params.id

    const weaponToPatch = weapons.find((weapon) => weapon.id === id)

    Object.keys(req.body).forEach(field => {
        weaponToPatch[field] = req.body[field]
    })

    res.send(`Weapon with id ${id} has been patched:\n ${JSON.stringify(weaponToPatch,null,2)}`)
})

// Delete
app.delete("/api/weapons/:id", (req, res) => {
    const id = req.params.id
    const findWeapon = weapons.find((weapon => weapon.id === id))

    weapons = weapons.filter(weapon => weapon.id !== id)

    findWeapon ? res.send(`Deleted weapon ${JSON.stringify(findWeapon,null,2)}...`) : res.status(404).send({errorMessage: `No weapon with id: ${id}`})

})

app.listen(8080, () => {
    console.log("Running on port",8080)
})


