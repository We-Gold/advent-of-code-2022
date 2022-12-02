import {input} from "./input.mjs"

// const input = `A Y
// B Y
// C Y
// A Z`

const solve = () => {
    const matches = input.split(`\n`)

    const matchScores = matches.map((matchString) => scoreMatch(matchString))

    const totalScore = sumMatchScores(matchScores)

    return totalScore
}

// Solution 1
// const outcomeDict = {
//     "A X": 3 + 1,
//     "A Y": 6 + 2,
//     "A Z": 0 + 3,
//     "B X": 0 + 1,
//     "B Y": 3 + 2,
//     "B Z": 6 + 3,
//     "C X": 6 + 1,
//     "C Y": 0 + 2,
//     "C Z": 3 + 3,
// }

// Solution 2
const outcomeDict = {
    "A X": 0 + 3,
    "A Y": 3 + 1,
    "A Z": 6 + 2,
    "B X": 0 + 1,
    "B Y": 3 + 2,
    "B Z": 6 + 3,
    "C X": 0 + 2,
    "C Y": 3 + 3,
    "C Z": 6 + 1,
}

const scoreMatch = (matchString) => {
    return outcomeDict[matchString]
}

const sumMatchScores = (matchScores) => {
    return matchScores.reduce((acc, x) => acc + x, 0)
}

console.log(solve())