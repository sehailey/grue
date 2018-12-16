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
  })
})
