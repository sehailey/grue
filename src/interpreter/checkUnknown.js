import * as ITEM from '../items'
import {
  look,
  inventory,
  directions,
  prepositions,
  filler
} from '../dictionary'
import verbs from '../dictionary/verbs'
const items = Object.keys(ITEM)

const dictionary = items
  .concat(look)
  .concat(inventory)
  .concat(directions)
  .concat(verbs)
  .concat(filler)
  .concat(prepositions)
  .map(word => word.toLowerCase())

export default props => {
  console.log('UNKNOWNS', props)
}
