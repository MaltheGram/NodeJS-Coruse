const barbieMovies = [
    {name: "Swan lake", year: "2001"},
    {name: "Princess and the pauper", year: "2008"},
    {name: "Fairies", year: "2014"}
]

const ratedBarbeMovies = barbieMovies.map((movie) => {
    movie.rating = 10
    return movie
})
console.log({ratedBarbeMovies})

const recentBarbieMovies = barbieMovies.filter((movie) => movie.year > 2005)
console.log({recentBarbieMovies})

/*
Loop advice
Only use for loops if you're doing finger counting. I.E counting to a number

Don't use enhanced for loops

Only use ForEach if you're doing something and dont care about the result
I.E populating the DOM with elements.

Always prefer functional loop methods such as:
map, filter & reduce

Map for mapping 1:1
Filter for filtering the array
Reduce to reducing the content of the array
 */



/*
forEach
Functional loop methods:
Map, Reduce, Filter
 */