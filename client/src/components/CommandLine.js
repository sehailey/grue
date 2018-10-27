import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addLog, parseCommand} from '../store'

class CommandLine extends Component {
  constructor() {
    super()
    this.state = {input: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({input: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addLog('> ' + this.state.input)

    const command = this.props.command
    command.input = this.state.input
    this.props.parse({...command})

    this.setState({input: ''})
  }

  render() {
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
    location: state.location,
    player: state.player,
    items: state.items,
    log: state.log,
    command: state.command,
  }
}

const mapDispatch = dispatch => {
  return {
    addLog: log => dispatch(addLog(log)),
    parse: command => dispatch(parseCommand(command)),
  }
}

export default connect(
  mapState,
  mapDispatch
)(CommandLine)
