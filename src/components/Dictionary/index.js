import * as ITEMS from '../Items'
import { look, inventory, verbs } from './verbs'
import directions from './directions'
import prepositions from './prepositions'
import filler from './filler'
const items = Object.keys(ITEMS).map(word => word.toLowerCase())

class Dictionary {
  constructor () {
    this.verbs = [...verbs, ...inventory, ...look, ...directions].map(word =>
      word.toLowerCase()
    )
    this.items = items.map(word => word.toLowerCase())
    this.filler = filler.map(word => word.toLowerCase())
    this.look = look.map(word => word.toLowerCase())
    this.inv = inventory.map(word => word.toLowerCase())
    this.directions = directions.map(word => word.toLowerCase())
    this.preps = prepositions.map(word => word.toLowerCase())
    this.all = this.verbs
      .concat(this.items)
      .concat(this.directions)
      .concat(this.filler)
      .concat(this.prepositions)
  }

  isUnknown (word) {
    return !this.all.includes(word.toLowerCase())
  }

  isLook (word) {
    return this.look.includes(word.toLowerCase())
  }

  isInv (word) {
    return this.inv.includes(word.toLowerCase())
  }

  isDirection (word) {
    return this.directions.includes(word.toLowerCase())
  }

  isVerb (word) {
    return this.verbs.includes(word.toLowerCase())
  }

  isItem (word) {
    return this.items.includes(word.toLowerCase())
  }
}

export default Dictionary
