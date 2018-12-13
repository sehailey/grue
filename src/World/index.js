import constructors from './constructors'
import * as locations from './locations'

const buildWorld = () => {
  const allLocations = constructors.map(constructor => {
    try {
      return new locations[constructor.name](constructor)
    } catch (e) {
      console.log(constructor.name + ' not a valid location.')
      return e
    }
  })
  return allLocations
}

class World {
  constructor (location) {
    this.locations = buildWorld()
    this.currentLoc = this.locations[0]
  }

  look () {
    return this.currentLoc.description
  }

  move (direction) {
    const { log, loc } = this.currentLoc.compass[direction]
    if (loc) this.setLoc(loc)
    return log
  }

  setLoc (newLoc) {
    this.currentLoc = newLoc
  }

  findItems () {
    return this.currentLoc.items.filter(item => item.isInvItem)
  }
}

export default World
