


// fetch("/pokemon")
//     .then(response => response.json())
//     .then(result => console.log(result))


const pokemonDiv = document.getElementById("pokemon")
console.log(pokemonDiv)


fetch("/api/pokemon")
    .then(response => response.json())
    .then(result => {
        result.data.results.forEach(pokemon => {
            const pokemonIndividualDiv = document.createElement("div")
            const pokemonName = document.createElement("p")
            pokemonName.innerText = pokemon.name

            const battleLink = document.createElement("a")
            battleLink.setAttribute("href",`/battle/${pokemon.name}`)
            const battleBtn = document.createElement("button")
            battleBtn.textContent = `Battle ${pokemon.name}`
            battleLink.appendChild(battleBtn)

            pokemonIndividualDiv.appendChild(pokemonName)
            pokemonDiv.appendChild(pokemonIndividualDiv)
            pokemonDiv.appendChild(battleLink)

        })
    })

// Redirect after X time
// setTimeout(() => {
//     window.location.href = "/battle"
//
// },3000)