import Interpreter from '../components/Interpreter'
const expect = require('chai').expect
const interpreter = new Interpreter()
describe('Interpreter', () => {
  it('returns an object with a verb if the first word in the sentence is a verb', () => {
    const result = interpreter.interpret('taKe MailBox')
    expect(result.verb).to.equal('take')
  })

  it('interprets directions as verbs', () => {
    const result = interpreter.interpret('n')
    expect(result.verb).to.equal('n')
  })

  it('does NOT return a verb if it\'s not the first word', () => {
    const result = interpreter.interpret('mailbox take')
    expect(result.verb).to.equal(undefined)
  })

  it('does NOT return items if there isn\'t a verb', () => {
    const result = interpreter.interpret('mailbox')
    expect(result.items).to.equal(undefined)
  })

  it('does NOT return items or a verb if there\'s an unknown word', () => {
    const result = interpreter.interpret('take mailbox eadsad')
    expect(result.items).to.equal(undefined)
    expect(result.unknown).to.equal('eadsad')
  })
})
