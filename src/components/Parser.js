import * as VERB from './verbs'
import * as ITEM from './items'
import {
    filler,
    look,
    inventory,
    directions,
    prepositions,
    misc,
} from './dictionary'

const items = Object.keys(ITEM).concat(misc)
const verbs = Object.keys(VERB).concat(look)

const dictionary = verbs
    .concat(items)
    .concat(filler)
    .concat(prepositions)
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
        verb: null,
        item1: null,
        prep: null,
        item2: null,
        command: [],
    }
    const input = string.toString().toUpperCase()
    const command = input.split(' ').filter(word => !filler.includes(word))
    output.command = command

    // test for unknown words
    for (let i = 0; i < command.length; i++) {
        if (!dictionary.includes(command[i])) {
            output.isUnknown = true
            output.unknown = command[i]
            return output
        }
    }

    if (command.length > 4) {
        output.isInvalid = true
        return output
    }

    const firstWord = command[0]

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
        } else output.verb = 'EXAMINE'
    }

    const secondWord = command[1]
    if (!items.includes(secondWord)) {
        return output
    } else {
        output.doActionOnItem = true
        output.item1 = secondWord
    }

    output.prep = command[2]
    //this should be 'with', 'from', 'on' etc

    const fourthWord = command[3]
    if (fourthWord && !items.includes(fourthWord)) {
        output.isInvalid = true
        return output
    } else {
        output.item2 = fourthWord
    }

    return output
}

export default Parser
