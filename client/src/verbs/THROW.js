//import unhelpfulAction from '../functions/unhelpfulAction'
const THROW = (props, visibleItems) => {
  const { command, addLog } = props
  let complete = true

  if (!command.item1) {
    addLog('What do you want to throw?')
    complete = false
    return complete
  }

  const target = props.items.find(
    item => item.name === command.item1 && item.loc === 'player'
  )
  if (!target) {
    props.addLog(`You don't have the ${command.item1}.`)
    return complete
  }

  if (!command.prep) {
    props.addLog(`What do you want to throw the ${command.item1} at?`)
    complete = false
    return complete
  }

  return complete
}

export default THROW
