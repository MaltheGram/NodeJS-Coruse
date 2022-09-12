let score;
let playerOne;
let playerTwo;

export const initializePlayers = (playerOnInit,playerTwoInit) => {
    playerOne = playerOnInit
    playerTwo = playerTwoInit

}

export const initializeScore = (scoreInit = 301) => {
    score = scoreInit
}
export const initializeGame = () => {
    console.log(playerOne, "&", playerTwo)
    console.log("Game starts with score...", score)
}
