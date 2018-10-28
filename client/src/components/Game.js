import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Navbar, Log, CommandLine } from '../components'
import { getMap, getAllItems, updateItem, addLog, clearCommand } from '../store'
import findVisibleItems from '../functions/findVisibleItems'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      moves: 0,
      visibleItems: []
    }
  }
  componentWillMount () {
    console.log('Game component will mount')
  }
  async componentDidMount () {
    await this.props.fetchData()
    const { rooms, log, player, addLog } = this.props
    const currentLoc = rooms.find(room => room.name === player.currentLoc)
    if (log.length === 0) addLog(currentLoc.description)
    console.log('Game component did mount')
    this.setState({ loading: false })
  }
  componentWillUpdate () {
    console.log('Game component will update')
  }
  componentDidUpdate () {
    console.log('Game component did update')
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
        <CommandLine />
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
      await dispatch(clearCommand())
    },

    addLog: log => {
      dispatch(addLog(log))
    },

    updateItem: item => {
      dispatch(updateItem(item))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Game)
