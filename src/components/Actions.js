class Actions {
  constructor () {
    this.actions = []
  }

  handleAction (props) {
    console.log(props)
    const { verb, items, prep } = props.command
    if (verb === 'look') return 'It is pitch black...'
    return { log: 'You are handling actions! ' }
  }
}

export default Actions
