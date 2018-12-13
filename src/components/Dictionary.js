import * as ITEM from '../items'
const verbs = ['take']
const filler = ['a', 'an', 'the']
const look = ['l', 'look']
export const inventory = ['i', 'inv', 'inventory']
export const directions = [
  'n',
  'north',
  'w',
  'west',
  'S',
  'SOUTH',
  'E',
  'EAST',
  'U',
  'UP',
  'D',
  'DOWN',
  'NW',
  'NE',
  'SW',
  'SE'
].map(word => word.toLowerCase())
export const prepositions = [
  'WITH',
  'IN',
  'INSIDE',
  'INTO',
  'ON',
  'FROM',
  'OUTSIDE'
].map(word => word.toLowerCase())
export const misc = ['FIRE', 'PATH', 'GROUND', 'SKY'].map(word =>
  word.toLowerCase()
)

const items = Object.keys(ITEM).map(word => word.toLowerCase())

class Dictionary {
  constructor () {
    this.items = items
    this.filler = filler
    this.look = look
    this.inv = inventory
    this.directions = directions
    this.verbs = verbs
    this.preps = prepositions
    this.all = items
      .concat(look)
      .concat(inventory)
      .concat(directions)
      .concat(verbs)
      .concat(filler)
      .concat(prepositions)
  }

  findVerb (word) {
    return this.verbs.find(verb => word === verb)
  }

  isUnknown (word) {
    return !this.all.includes(word)
  }
}
export default Dictionary
