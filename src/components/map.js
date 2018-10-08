import {CAVE, OUTSIDE, PATH, THEHOUSE} from './rooms'

CAVE.W = OUTSIDE
OUTSIDE.E = CAVE
OUTSIDE.N = PATH
PATH.S = OUTSIDE
PATH.N = THEHOUSE
THEHOUSE.S = PATH

export const Map = class Map {
    constructor() {
        this.currentLoc = CAVE
        this.rooms = [CAVE, OUTSIDE, PATH, THEHOUSE]
    }
}
