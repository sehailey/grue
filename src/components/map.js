import rooms from "./rooms"
import { torch, letter, mailbox } from "./items"

const Room = class Room {
  constructor(name, description) {
    this.name = name
    this.description = description
    this.n = null
    this.s = null
    this.e = null
    this.w = null
    this.contains = []
  }
}

let roomObj = {}
const restructureRooms = roomList => {
  roomList.map(room => {
    roomObj[room.name] = new Room(room.name, room.description)
  })
}
restructureRooms(rooms)

console.log(roomObj)

const cave = roomObj.cave
const outside = roomObj.outside
const path = roomObj.path
const house = roomObj.house

cave.w = outside
outside.e = cave
outside.n = path
path.s = outside
path.n = house
house.s = path

outside.contains.push(torch)

house.mailbox = mailbox

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
