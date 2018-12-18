import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLog } from '../store'

const defaultState = {
  input: ''
}

class CommandLine extends Component {
  constructor () {
    super()
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const input = this.state.input
    this.props.addLog('> ' + input)
    this.props.handleCommand(input)
    this.setState(defaultState)
  }

  handleChange (event) {
    console.log(this.state)
    this.setState({ input: event.target.value })
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

const mapDispatch = dispatch => ({
  addLog: log => dispatch(addLog(log))
})

export default connect(
  null,
  mapDispatch
)(CommandLine)
