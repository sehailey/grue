import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Navbar, Log, CommandLine, Actions } from '../components'
import { getMap, getAllItems, updateItems, addLog, clearCommand } from '../store'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      input: '',
      moves: 0
    }
  }

  componentDidMount () {
    this.props.fetchData()
  }

  incrementMoves () {
    let newMoves = this.state.moves
    newMoves++
    this.setState(() => ({ moves: newMoves }))
  }

  render () {
    const { log, player, rooms, items } = this.props
    if (!player || rooms.length === 0 || items.length === 0) return <div />

    return (
      <div className="container">
        <Navbar moves={this.state.moves} />
        <Log log={log} />

        <CommandLine value={this.state.input} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Actions />
      </div>
    )
  }
}

const mapState = state => {
  return {
    log: state.log,
    rooms: state.rooms,
    items: state.items,
    player: state.player
  }
}

const mapDispatch = dispatch => {
  return {
    fetchData: async () => {
      await dispatch(getAllItems())
      await dispatch(getMap())
    },
    initializeCommands: () => {
      dispatch(clearCommand())
    },
    addLog: log => {
      dispatch(addLog(log))
    },

    updateItems: item => {
      dispatch(updateItems(item))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Game)
