import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommandLine, Navbar, Log } from '../views'
import Interpreter from './Interpreter'
import axios from 'axios'
import {
  getLocation,
  getPlayer,
  getAllItems,
  addLog,
  logInvalid,
  logUnknown,
  move,
  playerMove
} from '../store'

class Game extends Component {
  constructor () {
    super()
    this.state = { loading: true }
    this.interpreter = new Interpreter()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    this.fetchData()
    this.props.fetchServerData()
  }

  async fetchData () {
    await this.props.fetchData()
    await this.props.getLocation()
    await this.props.getPlayer()
    await this.setState({ loading: false })
    this.props.addLog(this.props.location.look())
  }

  renderLoading () {
    return <div> loading... </div>
  }

  renderError () {
    return <div> error... </div>
  }

  handleSubmit (input) {
    const command = this.interpreter.interpret(input)

    try {
      return this.interpreter.handleCommand({ command, ...this.props })
    } catch (err) {
      console.log(err)
    }
  }

  renderDeath () {
    return (
      <div className="container">
        <Navbar />
        <Log log={'YOU HAVE DIED!'} />
        <CommandLine handleCommand={this.handleSubmit} />
      </div>
    )
  }

  renderGame () {
    return (
      <div className="container">
        <Navbar
          moves={this.props.player.moves}
          score={this.props.player.score}
        />
        <Log log={this.props.log} />
        <CommandLine handleCommand={this.handleSubmit} />
      </div>
    )
  }

  render () {
    if (this.state.loading) return this.renderLoading()
    if (this.props.error) return this.renderError()
    if (!this.props.player.isAlive) return this.renderDeath()
    return this.renderGame()
  }
}

const mapState = state => ({
  player: state.player,
  location: state.location,
  log: state.log
})

const mapDispatch = dispatch => {
  return {
    fetchData: () => dispatch(getAllItems()),
    fetchServerData: async () => {
      const { data } = await axios.get('./api')
      console.log(data)
    },
    getLocation: () => dispatch(getLocation()),
    getPlayer: () => dispatch(getPlayer()),
    addLog: text => dispatch(addLog(text)),
    logInvalid: () => dispatch(logInvalid()),
    logUnknown: word => dispatch(logUnknown(word)),
    move: loc => {
      dispatch(playerMove())
      dispatch(move(loc))
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(Game)
