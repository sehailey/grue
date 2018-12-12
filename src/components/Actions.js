class Actions {
  constructor () {
    this.actions = []
  }

  dispatch (props) {
    const { dictionary, action, player, currentLoc, items, addLog } = props
    console.log(action)
    addLog('You can\'t go that way.')
  }
}

export default Actions
