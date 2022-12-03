import { input } from "./input.mjs";

const solve = () => {
    const rucksackList = input.split(`\n`)

    // Part 1
    // const repeatedCharacters = rucksackList.map((rucksack) => {
    //     const [half1, half2] = splitCompartments(rucksack)

    //     return findRepeatedCharacter(half1, half2)
    // })

    const repeatedCharacters: string[] = []

    for (let i = 0; i < rucksackList.length; i += 3) {
        repeatedCharacters.push(findRepeatedCharacter(rucksackList[i], rucksackList[i + 1], rucksackList[i + 2]))
    }

    const priorities = repeatedCharacters.map((character) => calculatePriority(character))

    return sumPriorities(priorities)
}

// Part 1
// const splitCompartments = (rucksack: string) => {
//     const halfway = rucksack.length / 2

//     return [rucksack.slice(0, halfway), rucksack.slice(halfway, rucksack.length)]
// }

// Part 1
// const findRepeatedCharacter = (half1: string, half2: string): string => {
//     const characterSet = new Set(half1)

//     for (const letter of half2) {
//         if (characterSet.has(letter)) return letter
//     }

//     // Note: it is known that every rucksack will have a repeated letter, no need to return except for typescript
//     return "_"
// }

const findRepeatedCharacter = (elf1: string, elf2: string, elf3: string): string => {
    const characterSet1 = new Set(elf1)
    const characterSet2 = new Set(elf2)

    for (const letter of elf3) {
        if (characterSet1.has(letter) && characterSet2.has(letter)) return letter
    }

    // Note: it is known that every rucksack will have a repeated letter, no need to return except for typescript
    return "_"
}

const calculatePriority = (character: string) => {
    const baseLetter = isUpperCase(character) ? "&" : "`"

    return character.charCodeAt(0) - baseLetter.charCodeAt(0)
}

const isUpperCase = (letter: string) => letter.toUpperCase() == letter

const sumPriorities = (priorities: number[]) => {
    return priorities.reduce((acc, x) => acc + x, 0)
}

console.log(solve())