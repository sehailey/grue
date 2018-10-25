import React, {Component} from 'react'
import {connect} from 'react-redux'
//import parse from './parse'
import {updateItems, addLog} from '../store'

import * as VERB from '../verbs'

const defaultCommand = {
  isInvalid: false,
  isUnknown: false,
  isDirection: false,
  unknown: null,
  direction: null,
  verb: null,
  item1: null,
  prep: null,
  item2: null,
  words: [],
}

class Interpreter extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      command: defaultCommand,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.findItem = this.findItem.bind(this)
  }

  handleChange(event) {
    this.setState({input: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const input = this.state.input

    this.setState({input: ''})
    this.props.addLog('> ' + input)
    const command = parse(input, this.state.command)

    console.log('COMMAND', command)
    if (command.isUnknown) this.unknownWord(command.unknown)
    else if (command.isInvalid) this.invalidCommand()
    //else if (command.isDirection) VERB.MOVE(this.props, command.direction)
    else if (!this.itemIsVisible(command.words[0])) this.itemNotVisible()
    else this.dispatchAction(command)
  }

  clearCommand() {
    this.setState(() => {
      return {command: defaultCommand}
    })
  }

  invalidCommand() {
    this.props.addLog("I'm not sure what you're trying to say.")
    this.clearCommand()
  }

  unknownWord(word) {
    this.props.addLog("I don't know the word " + word.toLowerCase() + '.')
    this.clearCommand()
  }

  itemNotVisible() {
    this.props.addLog("You don't see that here!")
    this.clearCommand()
  }

  findItem(ITEMNAME) {
    let itemName = ITEMNAME.toLowerCase()
    return this.props.items.find(item => item.name === itemName)
  }

  itemIsInInv(item) {
    return item.loc === 'player'
  }

  itemIsInCurrentLoc(item) {
    console.log(item.loc, this.props.location.name)
    return item.loc === this.props.location.name
  }

  // only return container if it is another item
  itemIsInContainer(item) {
    return this.props.items.find(i => i.name === item.loc)
  }

  itemIsVisible(item) {
    if (this.itemIsInInv(item) || this.itemIsInCurrentLoc(item)) return true
    else {
      let container = this.itemIsInContainer(item)
      if (container) {
        return (
          (this.itemIsInInv(container) && container.isOpen) ||
          (this.itemIsInCurrentLoc(container) && container.isOpen)
        )
      }
    }
  }
  dispatchAction(command) {
    console.log('DISPATCH ACTION', command)
    const result = VERB[command.verb](this.props, command)
    console.log('RESULT', result)
    this.props.addLog(result)
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
  }
}

const mapDispatch = dispatch => {
  return {
    addLog: log => {
      dispatch(addLog(log))
    },
    // dispatchMove: direction => {
    //   dispatch(move(direction))
    // },

    updateItems: item => {
      dispatch(updateItems(item))
    },
  }
}

export default connect(
  mapState,
  mapDispatch
)(Interpreter)
