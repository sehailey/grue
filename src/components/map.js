import {CAVE, OUTSIDE, PATH, HOUSE} from './rooms'

CAVE.W = OUTSIDE
OUTSIDE.E = CAVE
OUTSIDE.N = PATH
PATH.S = OUTSIDE
PATH.N = HOUSE
HOUSE.S = PATH

export const Map = class Map {
    constructor() {
        this.currentLoc = CAVE
        this.rooms = [CAVE, OUTSIDE, PATH, HOUSE]
    }
}
