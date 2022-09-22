import express from "express"
import path from "path"

const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage.html"))
})

app.listen(8080, () => {
    console.log("Listening on port", 8080)
})