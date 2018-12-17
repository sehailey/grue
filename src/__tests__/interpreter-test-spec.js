import Interpreter from '../components/Interpreter'
const expect = require('chai').expect
const interpreter = new Interpreter()
describe('Interpreter', () => {
  it('if the verb requires an object it asks what you want to do', () => {
    const result = interpreter.interpret('taKe MailBox')
    expect(result.log).to.equal('What do you want to take?')
  })

  it('if the input has an unknown word it says it is unknown', () => {
    const result = interpreter.interpret('flip table')
    expect(result.log).to.equal('I don\'t know the word \'flip\'.')
  })

  it('if the sentence doesn\'t have a verb as the first word it returns an invalid response', () => {
    const result = interpreter.interpret('mailbox take')
    expect(result.log).to.equal('I\'m not sure what you\'re trying to say.')
  })

  it('does NOT return items if there isn\'t a verb', () => {
    const result = interpreter.interpret('mailbox')
    expect(result.log).to.equal('I\'m not sure what you\'re trying to say.')
  })
})
