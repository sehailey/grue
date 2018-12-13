import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommandLine, Navbar, Log } from '../views'
import Interpreter from './Interpreter'
import Actions from './Actions'
import World from '../World'
import { getWorld, getAllItems, addLog, logInvalid, logUnknown } from '../store'

class Game extends Component {
  constructor () {
    super()
    this.state = { loading: true }
    this.interpreter = new Interpreter()
    this.actionHandler = new Actions(this)
    this.handleCommand = this.handleCommand.bind(this)
  }
  componentDidMount () {
    this.props.getWorld()
    this.props.fetchData()
  }

  renderLoading () {
    return <div> loading... </div>
  }

  renderError () {
    return <div> error... </div>
  }

  handleAction (command) {
    const result = this.actionHandler.handleAction({ command, ...this.props })
    this.props.addLog(result.log)
  }

  handleCommand (input) {
    const command = this.interpreter.interpret(input)
    console.log(command)
    if (command.unknown) this.props.logUnknown(command.unknown)
    else if (!command.verb) this.props.logInvalid()
    else this.handleAction(command)
  }

  renderGame () {
    return (
      <div className="container">
        <Navbar />
        <Log log={this.props.log} />
        <CommandLine handleCommand={this.handleCommand} />
      </div>
    )
  }

  render () {
    if (this.props.loading) return this.renderLoading()
    if (this.props.error) return this.renderError()
    return this.renderGame()
  }
}

const mapState = state => ({
  player: state.player,
  world: state.world,
  log: state.log
})

const mapDispatch = dispatch => ({
  fetchData: () => dispatch(getAllItems()),
  getWorld: () => dispatch(getWorld()),
  addLog: text => dispatch(addLog(text)),
  logInvalid: () => dispatch(logInvalid()),
  logUnknown: word => dispatch(logUnknown(word))
})
export default connect(
  mapState,
  mapDispatch
)(Game)
