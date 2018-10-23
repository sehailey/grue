import {Room} from '../classes'

const westOfHouse = constructor => new Room(constructor)
westOfHouse.isBlocked = {
  E: "The door is boarded and you can't remove the boards.",
}
export default westOfHouse
