import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Navbar, Log, CommandLine } from '../components'
import { getMap, getAllItems, addLog, clearCommand } from '../store'
import LOOK from '../verbs/LOOK'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      moves: 0,
      visibleItems: []
    }
  }
  // componentWillMount () {
  //   console.log('Game component will mount')
  // }
  async componentDidMount () {
    await this.props.fetchData()
    //console.log('Game component did mount')
    this.setState({ loading: false })
    LOOK(this.props)
  }
  // componentWillUpdate (nextProps) {
  //   console.log('Game component will update')
  // }
  componentDidUpdate (prevProps) {
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

    addLog: log => dispatch(addLog(log))
  }
}

export default connect(
  mapState,
  mapDispatch
)(Game)
