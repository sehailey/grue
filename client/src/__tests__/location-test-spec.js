import Location from '../components/Location'
const expect = require('chai').expect

const loc = {
  name: 'test',
  title: 'West of House',
  description:
    'This is an open field west of a white house, with a boarded front door. There is a small mailbox here.',
  items: []
}

describe('Location', () => {
  let location
  beforeEach(() => {
    location = new Location(loc)

    it('look', () => {
      const result = location.look()
      expect(result).to.equal(loc.description)
    })
    it('move', () => {
      const result = location.move('N')
      expect(result.log).to.equal('You can\'t go that way.')
    })
  })
})
