import * as VERB from './verbs'
import * as ITEM from './items'

const verbs = Object.keys(VERB)
const items = Object.keys(ITEM)

const prepositions = ['AN', 'A', 'THE', 'AT']
const look = ['L', 'LOOK']
const inventory = ['I', 'INV', 'INVENTORY']
const directions = ['N', 'NORTH', 'W', 'WEST', 'S', 'SOUTH', 'E', 'EAST']

const dictionary = verbs
    .concat(items)
    .concat(prepositions)
    .concat(look)
    .concat(inventory)
    .concat(directions)

const Parser = function(string) {
    const output = {
        isUnknown: false,
        isInvalid: false,
        isMove: false,
        isLook: false,
        isInv: false,
        isTake: false,
        isDrop: false,
        doActionOnItem: false,
        unknown: '',
        direction: '',
        verb: '',
        item: '',
        item2: '',
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

    const firstWord = command[0]
    console.log(command)

    if (inventory.includes(firstWord) && command.length === 1) {
        output.isInv = true
        return output
    }

    if (directions.includes(firstWord) && command.length === 1) {
        output.direction = firstWord.charAt(0)
        output.isMove = true
        return output
    }

    if (!verbs.includes(firstWord)) {
        output.isInvalid = true
        return output
    } else output.verb = firstWord

    if (look.includes(firstWord)) {
        if (command.length === 1) {
            output.isLook = true
            return output
        } else output.verb = 'examine'
    }

    const secondWord = command[1]
    if (!items.includes(secondWord)) {
        return output
    } else {
        output.doActionOnItem = true
        output.item = secondWord
    }

    const thirdWord = command[2]
    //this should be 'with', 'from', 'on' etc

    const fourthWord = command[3]
    if (!items.includes(fourthWord)) {
        output.isInvalid = true
        return output
    } else {
        output.item2 = fourthWord
    }

    return output
}

export default Parser
