import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateItems, clearCommand, addLog } from '../store'
import * as VERB from '../verbs'

class Actions extends Component {
  constructor () {
    super()
    this.state = {
      visibleItems: []
    }
  }
  componentDidMount () {
    const { items, rooms, log, player, addLog } = this.props
    const currentLoc = rooms.find(room => room.name === player.currentLoc)
    if (log.length === 0) addLog(currentLoc.description)
    console.log('ACTION COMPONENT MOUNTED!', this.props, this.state)
    const visibleOpenContainerNames = items
      .filter(item => item.isContainer && item.isOpen && (item.loc === 'player' || item.loc === player.currentLoc))
      .map(item => item.name)
    console.log('visible open containers:', visibleOpenContainerNames)

    const visibleItems = items.filter(
      item => item.loc === player.currentLoc || item.loc === 'player' || visibleOpenContainerNames.includes(item)
    )
    console.log('visibleItems:', visibleItems)
    this.setState({ visibleItems })
  }
  shouldComponentUpdate (prevProps) {
    if (prevProps.command.words === this.props.command.words) return false
    return true
  }

  render () {
    const { addLog, clearCommand, command, items } = this.props

    console.log('I got a new command! the words are now:', command.words)
    if (command.isUnknown) {
      addLog('I don\'t know the word ' + command.unknown.toLowerCase() + '.')
      clearCommand()
    } else if (command.isDirection) {
      addLog('Someday you\'ll be able to move.')
    } else if (command.verb) {
      try {
        const complete = VERB[command.verb]({ ...this.props, ...this.state })
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
      dispatch(updateItems(item))
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
