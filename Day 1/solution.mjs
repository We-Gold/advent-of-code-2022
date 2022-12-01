import {input} from "./input.mjs"

const solve = (caloriesString, sumList) => {
    const elfList = caloriesString.split(`\n\n`)

    const summedLists = elfList.map((list) => {
        const numbers = list.split(`\n`).filter((str) => !Number.isNaN(parseInt(str))).map((str) => parseInt(str))

        return sumList(numbers)
    })

    // Part 1
    // return Math.max(...handledLists)

    // Part 2
    return sumList(summedLists.sort((a, b) => b - a).slice(0, 3))
}

const sumList = (caloriesList) => {
    return caloriesList.reduce((acc, x) => acc + x, 0)
}

console.log(solve(input, sumList))