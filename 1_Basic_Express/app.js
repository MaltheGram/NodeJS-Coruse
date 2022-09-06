const express = require('express')

// Instantiate the library express
// const app = require("express")(); is also an option
const app = express()

// route
app.get('/', (request, response) => {
    response.send({
        message: 'Created my fist route, Check!'
    })
})
        // endpoint
app.get("/deers",(req,res) => {
    res.send({
        size: "Big"
    })
})
// Path variable
app.get("/deers/:id", (req, res) => {
    if ((Number(req.params.id) === 1)){
        res.send({
            name: "Bambi",
            GOAT_DEER: true
        })
    }
    else {
        res.send({
            errorMessage: "No deer with given id"
        })
    }
})

// Query String
app.get("/actors", (req,res) => {
    console.log(req.query.firstName)
    res.send({
        message: "Information about actor",
        ...req.query
    })
})

app.get("/cups",(req,res) => {
    res.send({
        purpose: "To drink coffee!"
    })
})

app.listen(8080, () => {
    console.log("Server is running on port",8080)
})


// Sending data with GET

// 1. Path variables
// /deers/{id}

// 2: Query Parameters (Query string)
// /deers?key=value&key2=value2


