import Interpreter from '../components/Interpreter'

const chai = require('chai')
const expect = chai.expect

describe('Interpreter', () => {
  let interpreter
  beforeEach(() => {
    interpreter = new Interpreter()
  })
  it('interpreter.splitString takes a string and returns an array of individual lower-case words', () => {
    const wordArr = interpreter.splitString('Hello world')
    expect(wordArr).to.deep.equal(['hello', 'world'])
  })

  xit('interpreter.parseUnknown takes a command and returns the first unknown word', () => {
    const wordArr = interpreter.splitString('Hello sdfgfgsgs world')
    const unknown = interpreter.parseUnknown(wordArr)
    expect(unknown).to.equal('hello')
  })

  it('interpreter.parseVerb takes an array and returns the first word if it\'s a verb', () => {
    const parsed = interpreter.parseVerb(['take', 'Mailbox'])
    expect(parsed).to.equal('take')
    interpreter.clearCommand()
    const parsed2 = interpreter.parseVerb(['mailbox'])
    expect(parsed2).to.equal(undefined)
  })

  it('interpreter.parseItems returns an array of items from the command', () => {
    const items = interpreter.parseItems(['take', 'mailbox'])
    expect(items.length).to.equal(1)
  })

  xit('interpreter.interpret does not return any items if there\'s no verb', () => {
    const result = interpreter.interpret('mailbox')
    expect(result.items.length).to.equal(0)
  })
})
