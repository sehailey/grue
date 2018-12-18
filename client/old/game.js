import { buildWorld } from '../store'
import Player from '../components/Player'
const nn = { name: 'notnull', score: 0, isAlive: true, inv: [] }
const notnull = new Player(nn)
const world = buildWorld()
describe('Game', () => {
  let location, player, command
  beforeEach(() => {
    location = world.westOfHouse
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
