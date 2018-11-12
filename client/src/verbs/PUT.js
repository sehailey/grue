const PUT = (props, item1, prep, item2) => {
  let inPreps = ['IN', 'INSIDE', 'INTO']
  let onPreps = ['ON']

  let log = 'I\'m not sure what you\'re trying to say.'

  if (inPreps.includes(prep)) {
    if (!item1.loc === 'player') log = 'You don\'t have that!'
    else if (!item2.isContainer) log = 'That\'s obviously not going to work.'
    else if (!item2.isOpen) {
      log = 'You should open it first.'
    } else {
      item1.loc = item2.name
      log = 'Done.'
    }
  } else if (onPreps.includes(prep)) {
    if (!item1.loc) return false
  }
  props.addLog(log)
}

export default PUT
