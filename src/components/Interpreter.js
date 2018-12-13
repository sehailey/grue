import Dictionary from './Dictionary'
const dictionary = new Dictionary()

class Interpreter {
  constructor () {
    this.verb = null
    this.items = []
    this.prep = null
  }

  splitString (string) {
    return string.split(' ').map(word => word.toLowerCase())
  }

  parseUnknown (wordArr) {
    return wordArr.find(word => dictionary.isUnknown(word))
  }

  parseVerb (wordArr) {
    const verb = dictionary.findVerb(wordArr[0])
    if (verb) this.verb = verb
    return verb
  }

  parseItems (wordArr) {
    const items = wordArr.filter(word => dictionary.items.includes(word))
    if (this.verb) this.items = items
    return items
  }
  parsePrep (wordArr) {
    const prep = wordArr[2]
    if (dictionary.preps.includes(prep)) this.prep = prep
    return prep
  }

  parseCommand (wordArr) {
    let verb, items, prep, unknown
    verb = this.parseVerb(wordArr)
    items = this.parseItems(wordArr)
    prep = this.parsePrep(wordArr)
    unknown = this.parseUnknown(wordArr)
    return { verb, items, prep, unknown }
  }

  interpret (string) {
    const splitString = this.splitString(string)
    const command = this.parseCommand(splitString)
    this.clearCommand()
    return command
  }
  clearCommand () {
    this.verb = null
    this.items = []
    this.prep = null
  }
}

export default Interpreter
