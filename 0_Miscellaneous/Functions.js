//console.log(add(5, 2));

function add(a,b){
    return a + b
}

const addAnonymousFunction = function (a,b){
    return a + b
}
//console.log(addAnonymousFunction(5,5))


const addArrowFunction = (a,b) => {
    return a + b
}
addArrowFunction(5,15)

// Implicit return
const addArrowFunctionCompact = (a, b) => a + b

// Callback functions

function genericActionExecutor(anyCallback, name){
    return anyCallback(name)

}
const spitting = (name) => `${name} is spitting`

//console.log(genericActionExecutor(spitting, "Amanda"));

const shooting = (name) => {
    return `${name} is shooting`
}
console.log(genericActionExecutor(shooting, 'Malthe'));

console.log(genericActionExecutor((name) => (`${name} is running away`),'Murat'))