import verbs from '../dictionary/verbs'
import * as ITEM from '../items'
const filler = ['a', 'an', 'the']
const look = ['l', 'look']
export const inventory = ['i', 'Inv', 'inventory']
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
]
export const prepositions = [
  'WITH',
  'IN',
  'INSIDE',
  'INTO',
  'ON',
  'FROM',
  'OUTSIDE'
]
export const misc = ['FIRE', 'PATH', 'GROUND', 'SKY']
export { default as verbs } from './verbs'
const items = Object.keys(ITEM)
const dictionary = items
  .concat(look)
  .concat(inventory)
  .concat(directions)
  .concat(verbs)
  .concat(filler)
  .concat(prepositions)
  .map(word => word.toLowerCase())

class Dictionary {
  constructor () {
    this.filler = filler
    this.look = look
    this.inv = inventory
    this.directions = directions
    this.verbs = [...look, ...inventory, ...verbs]
    this.prepositions = prepositions
  }
}
export default Dictionary
