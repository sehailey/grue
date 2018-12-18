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
      return {
        log: `Oh, no! You have walked into the slavering fangs of a lurking grue!

     ****  You have died  ****

     Now, let's take a look here... Well, you probably deserve another chance. I can't quite fix you up completely, but you can't have everything.

     Forest
     This is a forest, with trees in all directions. To the east, there appears to be sunlight.`
      }
    } else return this.compass[direction.toUpperCase()]
  }
}

export default attic
