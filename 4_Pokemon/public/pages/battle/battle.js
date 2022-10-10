const pathVariables = location.pathname.split("/")
const pokemonName = pathVariables.pop();

// todo start the battle against this pokemon
// fetch data about this specific pokemon


fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => res.json())
    .then(pokemon => {
        const iWon = Math.random() >= 0.5
        console.log(pokemon)

        const battlingPokemon = document.getElementById("battling-pokemon-sprite")
        const src = pokemon.sprites.other.dream_world.front_default
        battlingPokemon.src = src

        const whoWonHeader = document.getElementById("who-won")


        if (iWon) {
            whoWonHeader.innerText = "You won!"
        } else {
            whoWonHeader.innerText = "You lost!"
        }

    })
