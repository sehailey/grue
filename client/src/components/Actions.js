import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateItem, clearCommand, addLog } from '../store'
import findVisibleItems from '../functions/findVisibleItems'
import * as VERB from '../verbs'

class Actions extends Component {
  constructor () {
    console.log('constructor')
    super()
    this.state = {
      visibleItems: []
    }
  }
  componentWillMount () {
    console.log('component will mount.')
  }
  componentDidMount () {
    const { rooms, log, player, addLog } = this.props
    const currentLoc = rooms.find(room => room.name === player.currentLoc)
    if (log.length === 0) addLog(currentLoc.description)
    console.log('component did mount')
  }

  shouldComponentUpdate (prevProps) {
    console.log('should component update?')
    if (prevProps.command.words === this.props.command.words) return false
    return true
  }

  componentWillUpdate () {
    console.log('component will update! visibleItems:', this.state.visibleItems)
  }

  componentDidUpdate () {
    console.log('component did update!')
  }

  setVisibleItems () {
    const visibleItems = findVisibleItems(this.props)
    this.setState({ visibleItems })
  }

  render () {
    const { addLog, clearCommand, command } = this.props
    if (!command.words.length) return <div />

    console.log('I got a new command! the words are now:', command.words)
    if (command.isUnknown) {
      addLog('I don\'t know the word ' + command.unknown.toLowerCase() + '.')
      clearCommand()
    } else if (command.isDirection) {
      addLog('Someday you\'ll be able to move.')
    } else if (command.verb) {
      try {
        const complete = VERB[command.verb](this.props, this.state)
        if (complete) clearCommand()
      } catch (e) {
        console.log(e)
      }
    }

    return <div>actions</div>
  }
}

const mapState = state => {
  return {
    player: state.player,
    items: state.items,
    log: state.log,
    rooms: state.rooms,
    command: state.command
  }
}

const mapDispatch = dispatch => {
  return {
    addLog: log => {
      dispatch(addLog(log))
    },
    updateItems: item => {
      dispatch(updateItem(item))
    },
    clearCommand: () => {
      dispatch(clearCommand())
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Actions)
