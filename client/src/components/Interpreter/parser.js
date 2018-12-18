import Dictionary from '../Dictionary'
const dictionary = new Dictionary()

const parseUnknown = wordArr => {
  return wordArr.find(word => dictionary.isUnknown(word))
}

const parseVerb = wordArr => {
  if (dictionary.isVerb(wordArr[0])) return wordArr[0]
}

const parseItemNames = wordArr => {
  return wordArr.filter(word => dictionary.items.includes(word))
}
const parsePrep = wordArr => {
  const prep = wordArr[2]
  if (dictionary.preps.includes(prep)) this.prep = prep
  return prep
}

const parseCommand = string => {
  let verb, itemNames, prep, unknown, count
  const wordArr = string.split(' ').map(word => word.toLowerCase())
  //console.log('parser received: ', wordArr)
  verb = parseVerb(wordArr)
  //console.log(verb)
  itemNames = verb ? parseItemNames(wordArr) : undefined
  prep = parsePrep(wordArr)
  unknown = parseUnknown(wordArr)
  count = wordArr.length
  if (itemNames) count -= itemNames.length
  if (verb) count--
  if (prep) count--
  const result = { verb, itemNames, prep, unknown, count }

  return result
}

export default parseCommand
export { dictionary }
