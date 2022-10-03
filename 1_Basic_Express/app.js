import express from "express"

const app = express()

// route
app.get('/', (request, response) => {
    response.send({
        message: 'Created my fist route, Check!'
    })
})

app.get("/timezone", (req, res) => {
    const newDate = new Date().toLocaleString()
    // American week date starts with sunday
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


    res.send({data: newDate})
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

app.post("/actors",(req, res) => {
    console.log(req.body);
    res.send({data: req.body.name})
})

app.get("/lookunderthebed", (req,res) => {

    if (req.query.flashlight) {
        return res.send({message: "You are safe"})
    }
    res.redirect("/monsters")

    /*
    req.query.flashlight === "true"
        ? res.send({message: "You are safe"})
        : res.redirect("/monsters")
        
     */
})

app.get("/monsters", (req,res) => {
    res.send({message: "Monsters are all over the place"})
})


app.listen(8080, () => {
    console.log("Server is running on port",8080)
})


// Sending data with GET

// 1. Path variables
// /deers/{id}

// 2: Query Parameters (Query string)
// /deers?key=value&key2=value2


