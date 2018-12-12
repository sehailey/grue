import * as locations from '../locations'

const chai = require('chai')
const expect = chai.expect

describe('World', () => {
  it('is a class that takes all of the locations as a constructor', () => {
    const world = new Map(locations)
    expect(world.locations.length).to.equal(1)
  })
})
