import { input } from "./input.mjs";

const solve = () => {
    const pairs = input.split(`\n`)

    const pairedRanges = pairs.map((pairString) => convertPairToRange(pairString))

    const overlappingRanges = pairedRanges.filter((rangePair) => doesRangeOverlapOther(rangePair))

    return overlappingRanges.length
}

const convertPairToRange = (pairString: string) => {
    return pairString.split(",").map((rangeString) => {
        const numbers = rangeString.split("-")

        return { min: parseInt(numbers[0]), max: parseInt(numbers[1]) }
    })
}

// Part 1
const doesRangeContainOther = (ranges: { min: number, max: number }[]): boolean => {
    const firstRange = ranges[0]
    const secondRange = ranges[1]

    if (secondRange.min >= firstRange.min && secondRange.max <= firstRange.max)
        return true
    else if (firstRange.min >= secondRange.min && firstRange.max <= secondRange.max)
        return true

    return false
}

// Part 2
const doesRangeOverlapOther = (ranges: { min: number, max: number }[]): boolean => {
    const firstRange = ranges[0]
    const secondRange = ranges[1]

    // are mins contained in other range
    if (firstRange.min >= secondRange.min && firstRange.min <= secondRange.max)
        return true
    else if (secondRange.min >= firstRange.min && secondRange.min <= firstRange.max)
        return true

    // are maxes contained in other range
    if (firstRange.max >= secondRange.min && firstRange.max <= secondRange.max)
        return true
    else if (secondRange.max >= firstRange.min && secondRange.max <= firstRange.max)
        return true

    return false
}

console.log(solve())