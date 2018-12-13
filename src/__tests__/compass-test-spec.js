import Compass from '../World/Compass'
import Location from '../World/Location'
const chai = require('chai')
const expect = chai.expect

describe('Compass', () => {
  it('has a method addLoc that takes a direction and a location and sets it on the direction with it\'s description as a log', () => {
    const compass = new Compass()
    const location = new Location({ name: 'newLoc' })
    compass.addLoc('N', location)
    expect(compass.N.loc.name).to.equal('newLoc')
  })
})
