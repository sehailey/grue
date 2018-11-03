//import {listItems} from '../classes'

const CLOSE = (props, visibleItems) => {
  const { command, addLog } = props
  let complete = true

  if (!command.item1) {
    addLog('What do you want to close?')
    complete = false
    return complete
  }

  const target = visibleItems.find(item => item.name === command.item1)
  if (!target) {
    addLog('You don\'t see that here!')
    return complete
  }

  if (!target.CLOSE) {
    addLog(`You must tell me how to do that with a ${target.name}`)
    return complete
  }

  if (!target.isOpen) {
    addLog('It\'s already closed.')
    return complete
  }
  if (target.isContainer || target.isWindow) {
    target.CLOSE(props)
    return complete
  }

  return complete
}

export default CLOSE
