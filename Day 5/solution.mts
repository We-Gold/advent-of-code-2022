import { input } from "./input.mjs";

const solve = () => {
    const lines = input.split(`\n`).slice(1)

    const initialStacks = lines.slice(0, 9)
    const moves = lines.slice(10)

    const stacks = extractStacks(9, 8, initialStacks)

    moves.forEach((moveString) => makeMoveWithNewCrane(moveString, stacks))

    const topCrates = stacks.map((stack) => stack[0]).join("")

    return topCrates
}

// Part 1
const makeMoveWithOldCrane = (moveString: string, stacks: string[][]) => {
    const stringComponents = moveString.split(" ")

    const quantity = parseInt(stringComponents[1])
    const sourceIndex = parseInt(stringComponents[3]) - 1
    const destinationIndex = parseInt(stringComponents[5]) - 1

    for (let i = 0; i < quantity; i++) {
        const crate = stacks[sourceIndex].shift() ?? ""

        stacks[destinationIndex].unshift(crate)
    }
}

// Part 2
const makeMoveWithNewCrane = (moveString: string, stacks: string[][]) => {
    const stringComponents = moveString.split(" ")

    const quantity = parseInt(stringComponents[1])
    const sourceIndex = parseInt(stringComponents[3]) - 1
    const destinationIndex = parseInt(stringComponents[5]) - 1

    const crates = stacks[sourceIndex].splice(0, quantity)

    stacks[destinationIndex] = [...crates, ...stacks[destinationIndex]]
}

const extractStacks = (columns: number, rows: number, initialStacks: string[]): string[][] => {
    const stacks: string[][] = []

    // Loop through each stack, and add each letter to the stack
    for (let column = 1; column <= columns; column++) {
        const index = initialStacks[initialStacks.length - 1].indexOf(`${column}`)

        const stack: string[] = []

        for (let row = 0; row < rows; row++) {
            const crate = initialStacks[row][index]

            if (crate !== " ") stack.push(initialStacks[row][index])
        }

        stacks.push(stack)
    }

    return stacks
}

console.log(solve())