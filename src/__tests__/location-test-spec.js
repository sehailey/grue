import Location from '../components/Location'
const expect = require('chai').expect

const loc = { name: 'testLoc', description: 'This is a test loc', items: [] }

describe('Location', () => {
  describe('addItem', () => {
    let location
    beforeEach(() => {
      location = new Location(loc)
    })

    it('look', () => {
      const result = location.look()
      expect(result).to.equal(loc.description)
    })
    it('initializes compass w/ You can\'t go that way', () => {
      const result = location.move('N')
      expect(result.log).to.equal('You can\'t go that way.')
    })
  })
})
