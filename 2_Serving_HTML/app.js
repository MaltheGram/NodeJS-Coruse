import express from "express"

// Can't ever do this. Must be read as a file
//import packageJSON from "./package.json"

const app = express()


// All in the public folder will now be public to the client
app.use(express.static("Public"))

import path from "path"

// This is how we import a function from a given file the common js way
//const { incrementVisitor } = require("./geoCitiesUtil.js")

// This is how we import the mode way
import {incrementVisitor} from "./geoCitiesUtil.js"

app.get("/", (req, res) => {
    console.log("Visitors", incrementVisitor())
    //res.sendFile(__dir + "/public/frontpage.html")
    // in common js we use __dirname
    res.sendFile(path.resolve("./public/frontpage.html"))
})

const logConsole = (port) => {
    console.clear()
    console.log("Listening on port", port)

}
app.listen(8080, () => (
    logConsole(8080)
))

