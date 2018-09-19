import { verbs } from "./verbs"
import { items } from "./items"

const prepositions = ["AN", "A", "THE"]

const dictionary = verbs.concat(items).concat(prepositions)
console.log(dictionary)

const Parser = input => {
  const parser = {
    verb: "",
    noun1: "",
    proposition: "",
    noun2: ""
  }

  const string = input.toString().toUpperCase()
  const command = string.split(" ").filter(word => word !== "THE")

  console.log(command)
  for (let i = 0; i < command.length; i++) {
    if (!dictionary.includes(command[i])) {
      console.log("I don't know the word", command[i].toLowerCase())

      return command[i]
    }
  }
  let verb = command.shift()
  console.log("VERB:", verb)

  if (verbs.includes(verb)) {
    parser.verb = verb
  } else {
    console.log("First word wasn't a verb.")
  }

  if (prepositions.includes(command[0])) command.shift()

  let noun1 = command.shift()
  console.log("NOUN1:", noun1)
  if (items.includes(noun1)) {
    parser.noun1 = noun1
  } else {
    console.log("Noun1 wasn't a noun.")
  }

  if (prepositions.includes(command[0])) command.shift()

  let noun2 = command.shift()
  if (items.includes(noun2)) {
    parser.noun2 = noun2
  } else {
    console.log("next word wasn't a noun.")
  }

  return parser
}

export default Parser
