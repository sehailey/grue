import { Torch } from "./items"

export const Room = class Room {
  constructor(name) {
    this.name = name
    this.description = ""
    this.n = null
    this.s = null
    this.e = null
    this.w = null
    this.contains = {}
  }
}

const cave = new Room("cave")

class Outside extends Room {
  constructor() {
    super()
    this.name = "outside"
    this.description = "You're outside."
    this.contains = { torch: new Torch() }
  }
}

const cave = new Cave()
const outside = new Outside()

cave.w = outside
outside.e = cave

export const Map = class Map {
  constructor() {
    this.currentLoc = cave
    this.rooms = [cave, outside]
  }

  move(direction) {
    if (!this.currentLoc[direction]) {
      return "You can't go that way."
    }
    this.currentLoc = this.currentLoc[direction]
  }
}
