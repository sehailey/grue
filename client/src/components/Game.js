import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommandLine, Navbar, Log } from '../views'
import Interpreter from './Interpreter'
import {
  getLocation,
  getPlayer,
  getAllItems,
  addLog,
  logInvalid,
  logUnknown,
  move
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

  handleAction (result) {
    if (result.log) console.log(this.props.log)
  }
  handleSubmit (input) {
    let command, result
    command = this.interpreter.interpret(input)
    try {
      result = this.interpreter.handleCommand({ command, ...this.props })
      return this.handleAction(result)
    } catch (err) {
      console.log(err)
      this.props.logInvalid()
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
        <Navbar />
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
    getLocation: () => dispatch(getLocation()),
    getPlayer: () => dispatch(getPlayer()),
    addLog: text => dispatch(addLog(text)),
    logInvalid: () => dispatch(logInvalid()),
    logUnknown: word => dispatch(logUnknown(word)),
    move: loc => {
      dispatch(move(loc))
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(Game)
