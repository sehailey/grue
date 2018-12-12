import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommandLine, Navbar, Log } from '../views'
import Interpreter from './Interpreter'
import Actions from './Actions'
import { getAllItems, addLog } from '../store'

class Game extends Component {
  constructor () {
    super()
    this.state = { loading: true }
    this.interpreter = new Interpreter()
    this.actions = new Actions(this)
    this.handleCommand = this.handleCommand.bind(this)
  }
  componentDidMount () {
    this.props.fetchData()
  }

  renderLoading () {
    return <div> loading... </div>
  }

  renderError () {
    return <div> error... </div>
  }

  handleCommand (input) {
    const action = this.interpreter.interpret(input)
    const result = this.actions.dispatch({ action, ...this.props })
    console.log('jandleCommand result: ', result)
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
  items: state.items,
  rooms: state.rooms,
  log: state.log
})

const mapDispatch = dispatch => ({
  fetchData: () => dispatch(getAllItems()),
  addLog: text => dispatch(addLog(text))
})
export default connect(
  mapState,
  mapDispatch
)(Game)
