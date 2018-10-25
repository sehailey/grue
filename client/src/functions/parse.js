import * as VERB from '../verbs'
import * as ITEM from '../items'
import {
  filler,
  look,
  inventory,
  directions,
  prepositions,
  misc,
} from '../dictionary'

const items = Object.keys(ITEM).concat(misc)
const verbs = Object.keys(VERB).concat(look)
console.log(items)

const dictionary = verbs
  .concat(items)
  .concat(filler)
  .concat(prepositions)
  .concat(inventory)
  .concat(directions)
  .map(word => word.toUpperCase())

/*
  considerations
  the object coming in contains flags, slots, the input string, and the words.
  I am getting stuck with a procedure for how to parse.

  maybe check the slots and then word shift and then check the words...
  keep in mind that if there are words left over the command is invalid.
  but only the action will know this :-\
*/

const Parser = function(command) {
  command.words = command.words.concat(
    command.input
      .toString()
      .toUpperCase()
      .split(' ')
      .filter(word => !filler.includes(word))
  )

  // test for unknown words
  for (let i = 0; i < command.words.length; i++) {
    if (!dictionary.includes(command.words[i])) {
      command.isUnknown = true
      command.unknown = command.words[i]
      return command
    }
  }

  //test if direction
  const first = command.words[0]
  if (!directions.includes(first)) {
    if (command.words.length > 1) {
      command.isInvalid = true
      return command
    } else {
      command.isDirection = true
      command.direction = first
      return command
    }
  } else if (!verbs.includes(first)) {
    command.isInvalid = true
    return command
  } else {
    command.verb = first
    return command
  }

  //test if second word is item
  const second = command.words[1]
  if (second) {
    if (!items.includes(second)) {
      command.isInvalid = true
      return command
    }
  }
  return command
}

export default Parser
