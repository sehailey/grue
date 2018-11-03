import { randInt } from '../functions'
const rhetorts = [
  'You can\'t be serious.',
  'An intersting idea...',
  'A valiant effort.',
  'What a concept!'
]

export default () => rhetorts[randInt(rhetorts.length)]
