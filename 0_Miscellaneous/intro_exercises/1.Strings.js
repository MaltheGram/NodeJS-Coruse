// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";
const result = Number(numberOne) + Number(numberTwo)
console.log(result)

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const parsedOne = parseFloat(anotherNumberOne)
const parsedTwo = parseFloat(anotherNumberTwo)

const result2 = (parsedOne + parsedTwo).toFixed(2)

console.log(result2)






// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98



// Show in the console the avg. with 5 decimals

const oneParsed = parseFloat(one).toFixed(5)
const twoParsed = parseFloat(two).toFixed(5)
const threeParsed = parseFloat(three).toFixed(5)

const numbers = []
numbers.push(one, two, three)
let total = 0

for(let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}
let avg = total / numbers.length
console.log(avg.toFixed(5))

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters[2])



// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
console.log(fact.replace('j','J'))


// --------------------------------------



