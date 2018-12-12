import Interpreter from '../components/Interpreter'

const chai = require('chai')
const expect = chai.expect

describe('Interpreter', () => {
  let interpreter
  beforeEach(() => {
    interpreter = new Interpreter()
  })
  it('interpreter.parseString takes a string and returns an array of individual lower-case words', () => {
    const parsed = interpreter.parseString('Hello world')
    expect(parsed).to.deep.equal(['hello', 'world'])
  })

  it('interpreter.parseUnknown takes a command and returns the first unknown word', () => {
    const command = interpreter.parseString('Hello sdfgfgsgs world')
    const unknown = interpreter.parseUnknown(command)
    expect(unknown).to.equal('hello')
  })

  it('interpreter.interpretCommand() does something with the words set on state', () => {
    const result = interpreter.interpret('take mailbox')
    expect(result.verb).to.equal('take')
    expect(result.items[0]).to.equal('mailbox')
    expect(result.prep).to.equal('')
  })

  it('if there is no verb, it does not return any items', () => {
    const result = interpreter.interpret('mailbox')
    expect(result.items.length).to.equal(0)
  })
})
