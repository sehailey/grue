import React, { Component } from "react"
import { connect } from "react-redux"
import { Navbar, Log, ControlPanel, Parser } from "../components"
import {
  getCurrentLoc,
  addItemToLoc,
  removeItemFromLoc,
  addItemToInv,
  removeItemFromInv,
  move,
  addLog
} from "../store"

class Game extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
      parsed: {}
    }
  }
  componentDidMount() {
    this.props.fetchLoc()
    this.Take = this.Take.bind(this)
    this.Move = this.Move.bind(this)
    this.Drop = this.Drop.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.description !== this.props.location.description) {
      this.props.addLog(this.props.location.description)
    }
  }

  Move(e) {
    const direction = e.target.name
    this.props.addLog("> " + direction)
    if (this.props.location[direction]) {
      this.props.Move(direction)
    } else this.props.addLog("You can't go that way.")
  }

  Take(e) {
    // name currently comes from button
    const itemName = e.target.name

    // log take action
    this.props.addLog("> take " + itemName)
    const item = this.props.location.contains.find(ele => ele.name === itemName)

    if (item) {
      this.props.removeItemFromLoc(item)
      this.props.addItemToInv(item)
      this.props.addLog("You took the" + itemName + ".")
    } else if (this.props.player.inv.includes(item)) {
      this.props.addLog("You already have that!")
    } else this.props.addLog("You don't see a " + itemName + " here.")
  }

  Drop(e) {
    const itemName = e.target.name
    const item = this.props.player.inv.find(ele => ele.name === itemName)
    if (item) {
      this.props.removeItemFromInv(item)
      this.props.addItemToLoc(item)
      this.props.addLog("You dropped the " + itemName + ".")
    } else this.props.addLog("You don't have that!")
  }

  handleChange(event) {
    console.log(this.state)
    this.setState({ input: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.input)
    const parsed = Parser(this.state.input)
    if (typeof parsed === "string")
      this.props.addLog("I don't know the word " + parsed + ".")
    this.setState({ value: "" })
    this.setState(() => {
      return { parsed }
    })
  }

  render() {
    const { log } = this.props

    return (
      <div className="container">
        <Navbar />
        <Log log={log} />

        <ControlPanel
          Move={this.Move}
          Take={this.Take}
          Drop={this.Drop}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    location: state.location,
    log: state.log,
    player: state.player
  }
}

const mapDispatch = dispatch => {
  return {
    fetchLoc: () => {
      dispatch(getCurrentLoc())
    },
    Move: direction => {
      dispatch(move(direction))
    },
    addItemToLoc: item => {
      console.log(item)
      dispatch(addItemToLoc(item))
    },
    removeItemFromLoc: item => {
      console.log(item)
      dispatch(removeItemFromLoc(item))
    },
    addItemToInv: item => {
      console.log("ITEM", item)
      dispatch(addItemToInv(item))
    },
    removeItemFromInv: item => {
      dispatch(removeItemFromInv(item))
    },
    addLog: log => {
      dispatch(addLog(log))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Game)
