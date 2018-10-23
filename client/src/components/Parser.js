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

const dictionary = verbs
  .concat(items)
  .concat(filler)
  .concat(prepositions)
  .concat(inventory)
  .concat(directions)

const Parser = function(string, command) {
  const splitString = string
    .toString()
    .toUpperCase()
    .split(' ')
    .filter(word => !filler.includes(word))

  const words = command.words.concat(splitString)
  const newCommand = {...command}
  console.log('WORDS', words[0], directions, directions.includes(words[0]))

  // test for unknown words
  for (let i = 0; i < words.length; i++) {
    if (!dictionary.includes(words[i])) {
      newCommand.isUnknown = true
      newCommand.unknown = words[i]
      return newCommand
    }
  }

  const firstWord = words[0]
  if (directions.includes(firstWord)) {
    newCommand.isDirection = true
    newCommand.direction = words.shift()
    console.log('words after shift', words)
    if (words.length > 0) newCommand.isInvalid = true
    return newCommand
  } else if (!verbs.includes(firstWord)) {
    newCommand.isInvalid = true
    return newCommand
  } else newCommand.verb = words.shift()

  newCommand.words = words

  return newCommand
}

export default Parser
