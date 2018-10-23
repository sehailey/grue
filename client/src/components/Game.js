import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Navbar, Log, Interpreter} from '../components'
import {getMap, getAllItems, updateItems, addLog} from '../store'

import * as VERB from '../verbs'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      moves: 0,
      loading: true,
    }
  }

  componentDidMount() {
    this.props.fetchMap()
    this.props.fetchItems()
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.location.name !== this.props.location.name) {
  //     VERB.LOOK(this.props)
  //   }
  // }

  incrementMoves() {
    let newMoves = this.state.moves
    newMoves++
    this.setState(() => ({moves: newMoves}))
  }

  render() {
    const {log, player, Map, items, addLog} = this.props
    const currentLoc = Map.find(room => room.name === player.currentLoc)
    if (!currentLoc) return <div />
    if (log.length === 0) addLog(currentLoc.description)

    return (
      <div className="container">
        <Navbar moves={this.state.moves} />
        <Log log={log} />

        <Interpreter
          value={this.state.input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    log: state.log,
    Map: state.Map,
    items: state.items,
    player: state.player,
  }
}

const mapDispatch = dispatch => {
  return {
    fetchMap: () => {
      dispatch(getMap())
    },
    fetchItems: () => {
      dispatch(getAllItems())
    },

    addLog: log => {
      dispatch(addLog(log))
    },

    updateItems: item => {
      dispatch(updateItems(item))
    },
  }
}

export default connect(
  mapState,
  mapDispatch
)(Game)
