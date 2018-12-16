import {
  Item,
  InvItem,
  Container,
  Location,
  Player,
  Interpreter
} from '../components'

const expect = require('chai').expect
const interpreter = new Interpreter()
const notnull = new Player({ name: 'notnull', inv: [] })
const wos = new Location({
  name: 'westOfHouse',
  title: 'West of House',
  description:
    'This is an open field west of a white house, with a boarded front door. There is a small mailbox here.',
  items: []
})

const nos = new Location({
  name: 'northOfHouse',
  title: 'North of House',
  description:
    'You are facing the north side of a white house. There is no door here, and all the windows are boarded up. To the north a narrow path winds through the trees.',
  items: []
})
nos.compass.addLoc('S', wos)
wos.compass.addLoc('N', nos)
const item1 = new Item({ name: 'item', description: 'this is a test item' })
const invItem = new InvItem({
  name: 'invItem',
  description: 'this is a test invItem'
})
const container = new Container({
  name: 'container',
  description: 'this is a test container'
})

wos._addItem(item1)
wos._addItem(invItem)
wos._addItem(container)

describe('Game', () => {
  let location, player, command
  beforeEach(() => {
    location = wos
    player = notnull
    command = { verb: undefined, items: [], prep: undefined }
  })

  describe('handleCommand', () => {
    xit('should return an array of actions to be executed, each with a log and a result', () => {
      command.verb = 'take'
      command.itemNames = ['all']
      const result = interpreter.handleCommand({ command, player, location })

      expect(result).to.be.an('array')
    })
  })
})
