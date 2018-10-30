const rhetorts = ['isn\'t notably helpful.', 'has no effect.', 'doesn\'t seem to work.']
const randInt = () => Math.floor(Math.random() * Math.floor(rhetorts.length))

export default (Verbing, item) => {
  return `${Verbing} the ${item} ${rhetorts[randInt()]}`
}
