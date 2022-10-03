import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from 'uuid';

uuidv4()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

currentId = 4

let weapons = [
    { id: 1, name: "AK-47", price: 3500 },
    { id: 2, name: "COLT", price: 3000 },
    { id: 3, name: "RPG", price: 6000 },
    { id: 4, name: "Knife", price: 300 }
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
    const id = Number(req.params.id)
    const findWeapon = weapons.find((weapon => weapon.id === id))
    findWeapon ? res.send({data: findWeapon}) : res.status(404).send({errorMessage: `No weapon with given id ${id} exists`})


})
// Query String --> req.query
app.get("/api/weapons", (req, res) => {
    res.send({data: weapons})
})

// Post
app.post("/api/weapons", (req, res) => {
    const weapon = req.body
    weapon.id = ++currentId

    weapons.push(weapon)
    res.send({message: `Created new weapon: ${weapon.name}`})
})

// Update the entire resource (ID should be left untouched as this should be incremental from the database).
// For testing purpose we leave it in

app.put("/api/weapons/:id",(req,res) => {
    const id = Number(req.params.id)
    const weaponToPatch = weapons.find((weapon) => weapon.id === id)
    const {name, price} = req.body


    weaponToPatch.name = name ? name : weapons[id].name
    weaponToPatch.price = price ? price : weapons[id].price

    res.send({message: `Weapon with id ${id} has been updated`})
})


// Patch a single or multiple fields
app.patch("/api/weapons/:id", (req,res) => {
    const id = Number(req.params.id)

    const foundIndex = weapons.findIndex((weapon) => weapon.id === id)

    if (foundIndex !== -1){
        const foundWeapon = weapons[foundIndex]
        const weaponToUpdate = { ...foundWeapon, ...req.body, id: Number(req.params.id) }

        weapons[foundWeapon] = weaponToUpdate

        res.send({data: weaponToUpdate})

    } else {
        res.status(404).send({data: undefined, message: `No weapon with id: ${id}`})
    }
})

// Delete
app.delete("/api/weapons/:id", (req, res) => {
    const id = Number(req.params.id)
    const foundIndex = weapons.findIndex(weapon => weapon.id === id)

    if (foundIndex !== -1){
        const deletedWeapon = weapons.splice(foundIndex,1)[0]
        res.send({data: deletedWeapon})

    } else {
        res.status(404).send({data: undefined, message: `No weapon with id: ${id}`})
    }


    //findWeapon ? res.send({message: `Deleted weapon ${JSON.stringify(findWeapon,null,2)}...`}) : res.status(404).send({errorMessage: `No weapon with id: ${req.params.id}`})

})

app.listen(8080, () => {
    console.log("Running on port",8080)
})


