import {verbs} from './verbs'
import {items} from './items'
console.log(verbs)

const prepositions = ['AN', 'A', 'THE']
const look = ['L', 'LOOK']
const inventory = ['I', 'INVENTORY']
const directions = ['N', 'NORTH', 'W', 'WEST']

const dictionary = verbs
    .concat(items)
    .concat(prepositions)
    .concat(look)
    .concat(inventory)
    .concat(directions)

console.log(dictionary)

const Parser = string => {
    const output = {
        isUnknown: false,
        isInvalid: false,
        isDirection: false,
        isLook: false,
        isInv: false,
        doActionOnItem: false,
        unknown: '',
        direction: '',
        verb: '',
        item: '',
        object: '',
    }

    const input = string.toString().toUpperCase()
    const command = input
        .split(' ')
        .filter(word => !prepositions.includes(word))

    // test for unknown words
    for (let i = 0; i < command.length; i++) {
        if (!dictionary.includes(command[i])) {
            output.isUnknown = true
            output.unknown = command[i]
            return output
        }
    }

    const firstWord = command.shift()
    if (look.includes(firstWord)) {
        output.isLook = true
        return output
    }

    if (inventory.includes(firstWord)) {
        output.isInventory = true
        return output
    }

    if (directions.includes(firstWord)) {
        output.direction = firstWord
        output.isDirection = true
        return output
    }

    if (!verbs.includes(firstWord)) {
        output.isInvalid = true
        return output
    } else output.verb = firstWord

    const secondWord = command.shift()
    if (!items.includes(secondWord)) {
        return output
    } else {
        output.doActionOnItem = true
        output.noun = secondWord
    }

    return output
}

export default Parser
