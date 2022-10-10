import express from "express"
import pokemonRouter from "./routers/pokemonRouter.js"

const app = express()
app.use(pokemonRouter)

app.use(express.static("public"))

import {renderPage, injectData} from "./util/templateEngine.js"

const frontpagePage = renderPage("/frontpage/frontpage.html",
    {
        tabTitle: "Pokemon",
        cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
    })

const contactPage = renderPage("/contact/contact.html", {
    tabTitle: "Contact Us",
    cssLink: `<link rel="stylesheet" href="/pages/contact/contact.css">`
})

const battlePage = renderPage("/battle/battle.html", {
    tabTitle: "",
    cssLink: `<link rel="stylesheet" href="/pages/battle/battle.css">`

})

app.get("/", (req, res) => {
    res.send(frontpagePage);
})

const randomPokemon = ["pikachu", "slowpoke", "ditto"]
app.get("/battle", (req, res) => {
    res.redirect(`battle/${randomPokemon[Math.floor(Math.random() * randomPokemon.length)]}`)
})

app.get("/battle/:pokemonName", (req, res) => {
    const pokemonName = req.params.pokemonName
    //let battlePageWithData = injectData(battlePage, {pokemonName})
    res.send(battlePage.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
})

app.get("/contact", (req, res) => {
    res.send(contactPage);
})


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port)
});
