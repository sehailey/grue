import { InvItem } from '../classes'

class Leaflet extends InvItem {
  read () {
    return {
      log: `"WELCOME TO GRUE!

GRUE is a game of adventure, danger, and low cunning. In it you will explore some of the most amazing territory ever seen by mortals. No computer should be without one!"`
    }
  }
}

export default Leaflet
