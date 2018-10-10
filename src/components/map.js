import {northOfHouse, westOfHouse, southOfHouse, behindHouse} from './rooms'

//pivotaltracker
westOfHouse.N = northOfHouse
westOfHouse.S = southOfHouse

southOfHouse.W = westOfHouse
southOfHouse.E = behindHouse

northOfHouse.W = westOfHouse
northOfHouse.E = behindHouse

export const Map = class Map {
    constructor() {
        this.currentLoc = westOfHouse
        this.rooms = [westOfHouse, northOfHouse, southOfHouse, behindHouse]
    }
}
