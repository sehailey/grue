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
    console.log('ACTION COMPONENT MOUNTED!', this.props, this.state)
    const visibleOpenContainerNames = this.props.items
      .filter(
        item => item.isContainer && item.isOpen && (item.loc === 'player' || item.loc === this.props.player.currentLoc)
      )
      .map(item => item.name)
    console.log('visible open containers:', visibleOpenContainerNames)

    const visibleItems = this.props.items.filter(
      item =>
        item.loc === this.props.player.currentLoc || item.loc === 'player' || visibleOpenContainerNames.includes(item)
    )
    console.log('visibleItems:', visibleItems)
    this.setState({ visibleItems })
  }
  shouldComponentUpdate (prevProps) {
    if (prevProps.command.words === this.props.command.words) return false
    return true
  }
  isVisible (item) {
    return item.loc === 'player' || this.props.player.currentLoc
  }
  render () {
    const { addLog, clearCommand, command, items } = this.props
    if (!command.words.length || !items) return <div />
    // if (command.item1) locateItem1(command.item1)
    // if (command.item2) locateItem2(command.item2)
    console.log('I got a new command! the words are now:', command.words)
    if (command.isUnknown) {
      addLog('I don\'t know the word ' + command.unknown.toLowerCase() + '.')
      clearCommand()
    } else if (command.isDirection) {
      addLog('Someday you\'ll be able to move.')
    } else if (command.verb) {
      try {
        const complete = VERB[command.verb](this.props)
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
