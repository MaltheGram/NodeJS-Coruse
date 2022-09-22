const btn = document.getElementById("btn")
const countDown = document.getElementById("today")
const title = document.getElementById("title")
const dayName = new Date().toLocaleString('en', {weekday:'long'})

btn.addEventListener('click', () => {
    dayName === "Friday" ? friday() : notFriday()
})

const createBeer = () =>  {
    const beer = document.createElement("div")
    beer.classList.add("beer")

    beer.style.left = Math.random() * 100 + "vw";
    beer.style.animationDuration = Math.random() * 2 + 3 + "s"
    beer.style.fontSize = "75px"

    beer.innerHTML = "🍻"

    document.getElementById("box").appendChild(beer)

    setTimeout(() => {
        beer.remove();
    }, 5000);
}

const friday = () => {
    const audio = new Audio("friday.mp3")
    audio.play()
        .then( )
        .catch(error => console.error('Error playing music: ', error))

    document.body.style.backgroundImage = "url('beer.png')"
    document.body.style.fontWeight = "900"


    title.innerHTML = ""
    title.style.fontSize = "50px"

    countDown.classList.add("font")
    countDown.innerHTML = `IT'S ${dayName}!!!!!!!`

    btn.classList.add("hidden")
    setInterval(createBeer,100)
}
const notFriday = () => {
    btn.remove()
    countDown.innerHTML =  `It's ${dayName}!`

}

