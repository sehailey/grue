import { randInt } from '../functions'
const rhetorts = [
  'isn\'t notably helpful.',
  'has no effect.',
  'doesn\'t seem to work.'
]

export default (Verbing, item) => {
  return `${Verbing} the ${item} ${rhetorts[randInt(rhetorts.length)]}`
}
