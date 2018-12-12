import Dictionary from './Dictionary'
const dictionary = new Dictionary()
class Interpreter {
  constructor () {
    this.verb = ''
    this.items = []
    this.prep = ''
    //console.log(this)
  }

  parseString (string) {
    const command = string.split(' ').map(word => word.toLowerCase())
    this.parseCommand(command)
    return command
  }

  parseUnknown (command) {
    return command.find(word => dictionary.isUnknown(word))
  }

  parseVerb (command) {
    if (dictionary.isVerb(command[0])) this.verb = command[0]
  }

  parseItems (command) {
    if (this.verb) {
      this.items = command.filter(word => dictionary.items.includes(word))
    }
  }
  parsePrep (command) {
    if (this.items.length > 1) this.prep = command[2]
  }
  parseCommand (command) {
    this.parseVerb(command)
    this.parseItems(command)
    this.parsePrep(command)
    return { verb: this.verb, items: this.items, prep: this.prep }
  }

  interpretCommand () {}

  interpret (string) {
    const command = this.parseString(string)
    const result = this.parseCommand(command)
    return result
  }
}

export default Interpreter
