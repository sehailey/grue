import { filler } from '../dictionary'

export default input => {
  console.log('parsing...', input)
  return input.split(' ').filter(word => !filler.includes(word))
}
