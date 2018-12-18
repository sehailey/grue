const INV = props => {
  const { addLog, items } = props
  let complete = true

  const invItems = items
    .filter(item => item.loc === 'player')
    .map(item => item.aName)
    .join('\n')

  if (!invItems.length) {
    addLog('You are empty-handed.')
    return complete
  } else {
    const invDesc = 'You are carrying:\n' + invItems
    addLog(invDesc)
    return complete
  }
}

export default INV
