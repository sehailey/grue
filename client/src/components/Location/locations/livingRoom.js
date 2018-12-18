import Location from '../'

class livingRoom extends Location {
  look () {
    return `${this.title}
      You are in the living room. There is a doorway to the east, a wooden door with strange gothic lettering to the west, which appears to be nailed shut, a trophy case, and a large oriental rug in the center of the room.
Above the trophy case hangs an elvish sword of great antiquity.
A battery-powered brass lantern is on the trophy case.`
  }
}

export default livingRoom
