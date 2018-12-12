import Dictionary from './Dictionary'
import Commands from './Commands'

class Interpreter {
  constructor () {
    this.dictionary = new Dictionary()
    this.commands = new Commands()
  }
}

export default Interpreter
