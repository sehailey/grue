import Location from '../World/Location'
import World from '../World'
const chai = require('chai')
const expect = chai.expect

describe('World', () => {
  it('is a class that takes one location as a constructor', () => {
    const loc = new Location('new')
    const world = new World()

    //console.log('#############', world.currentLoc)
  })

  it('has a method \'move\' which takes a direction, sets the new loc as world.currentLoc, if it exists, and returns a log', () => {
    const loc = new Location('new')
    const world = new World(loc)
    //console.log(world.currentLoc.compass.N)
    world.move('N')
    expect(world.currentLoc.name).to.equal('northOfHouse')
  })
})
