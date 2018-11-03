import React, { Component } from 'react'
import { connect } from 'react-redux'
import { interpret } from '../functions'
import {
  addLog,
  clearCommand,
  parseCommand,
  updateItem,
  movePlayer,
  updateRoom
} from '../store'
import LOOK from '../verbs/LOOK'
class CommandLine extends Component {
  constructor () {
    super()
    this.state = { input: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ input: event.target.value })
  }

  async handleSubmit (event) {
    event.preventDefault()
    this.props.addLog('> ' + this.state.input)

    const command = this.props.command
    command.input = this.state.input
    await this.props.parse({ ...command })
    interpret({ ...this.props })

    this.setState({ input: '' })
  }

  render () {
    return (
      <div className="control-panel mt-2">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <div className="col">
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter command"
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    command: state.command,
    items: state.items,
    player: state.player,
    rooms: state.rooms
  }
}

const mapDispatch = dispatch => {
  return {
    addLog: log => dispatch(addLog(log)),
    clearCommand: () => dispatch(clearCommand()),
    parse: command => dispatch(parseCommand(command)),
    updateItem: item => dispatch(updateItem(item)),
    updateRoom: room => dispatch(updateRoom(room)),
    movePlayer: loc => dispatch(movePlayer(loc)),
    LOOK: props => LOOK(props)
  }
}

export default connect(
  mapState,
  mapDispatch
)(CommandLine)
