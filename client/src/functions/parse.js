import * as VERB from '../verbs'
import * as ITEM from '../items'
import { filler, look, inventory, directions, prepositions, misc } from '../dictionary'

const items = Object.keys(ITEM)
  .concat(misc)
  .map(word => word.toUpperCase())
  .map(word => word.replace(/[\W_]+/, ''))
console.log(items)
const verbs = Object.keys(VERB).concat(look)

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

const Parser = function (command) {
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

  const first = command.words[0]
  //test if direction
  if (directions.includes(first) && command.words.length === 1) {
    command.isDirection = true
    command.direction = first
  }

  if (verbs.includes(first)) {
    command.verb = first
  } else {
    command.isInvalid = true
    return command
  }

  //test if second word is item
  const second = command.words[1]
  if (second && items.includes(second)) {
    command.item1 = second.toLowerCase()
  }

  //test if second word is item
  const third = command.words[2]
  if (third && prepositions.includes(third)) {
    command.prep = third.toLowerCase()
  }

  const fourth = command.words[3]
  if (fourth && items.includes(fourth)) {
    command.item2 = fourth.toLowerCase()
  }

  return command
}

export default Parser
