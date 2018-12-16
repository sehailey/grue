import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommandLine, Navbar, Log } from '../views'
import Interpreter from './Interpreter'
import Actions from './Actions'
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
    this.verbHandler = new Actions()
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
  }

  renderLoading () {
    return <div> loading... </div>
  }

  renderError () {
    return <div> error... </div>
  }

  handleAction (command) {
    const actions = command.actions
    const result = actions.map(action => this.props.addLog(action.log))
  }

  handleMove (loc) {
    this.props.move(loc)
    this.props.addLog(loc.look())
  }

  handleSubmit (input) {
    const command = this.interpreter.interpret(input)
    const result = this.interpreter.handleCommand({ command, ...this.props })
    if (result.log) return this.props.addLog(result.log)
    else if (result.loc) return this.handleMove(result.loc)
    else if (result.actions) this.handleActions(result.actions)
    //it should only get here if there is a valid verb that takes items
    else this.props.addLog('error after interpreter handlecommand')
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
    move: loc => dispatch(move(loc))
  }
}
export default connect(
  mapState,
  mapDispatch
)(Game)
