import Location from '../'

class attic extends Location {
  constructor (data) {
    super(data)
    this.isLit = false
  }

  look () {
    if (!this.isLit) {
      return `You have moved into a dark place.
      It is pitch black. you are likely to be eaten by a grue.`
    }
  }

  move (direction) {
    if (direction !== 'd') {
      return this.compass['DEATH']
    } else return this.compass[direction.toUpperCase()]
  }
}

export default attic
