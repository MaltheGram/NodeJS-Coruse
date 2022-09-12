let visitorCounter = 0

export const incrementVisitor = () => {
    visitorCounter++
    return visitorCounter
}

/*
Cannot use this in module type syntax. this is common js syntax
module.exports = {
    incrementVisitor: incrementVisitor
}
*/
