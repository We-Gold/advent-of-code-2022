import { input } from "./input.mjs";

// Part 1
// const UNIQUE_MARKER_SIZE = 4

// Part 2
const UNIQUE_MARKER_SIZE = 14

const solve = () => {
    for (let i = 0; i < input.length - (UNIQUE_MARKER_SIZE - 1); i++) {
        const set = new Set(input.slice(i, i + UNIQUE_MARKER_SIZE))

        if (set.size == UNIQUE_MARKER_SIZE) return i + UNIQUE_MARKER_SIZE // return the character number
    }

    return -1;
}

console.log(solve())