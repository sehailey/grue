import React, { Component } from "react"
import { connect } from "react-redux"
import { Log, ControlPanel, CurrentLocation } from "../components"
import { getCurrentLoc, removeItemFromLoc, move, addLog } from "../store"

class Game extends Component {
  componentDidMount() {
    this.props.fetchLoc()
    this.Take = this.Take.bind(this)
    this.Move = this.Move.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.description !== this.props.location.description) {
      this.props.addLog(this.props.location.description)
    }
  }

  Move(e) {
    const direction = e.target.name
    if (this.props.location[direction]) {
      this.props.Move(direction)
    } else this.props.addLog("You can't go that way.\n")

    this.props.Move(direction)
  }

  Take(e) {
    const itemName = e.target.name
    const item = this.props.location.contains.find(ele => ele.name === itemName)
    if (item) {
      this.props.removeItemFromLoc(item)
      this.props.addLog("You took the" + itemName + ".\n")
    } else this.props.addLog("You don't see a " + itemName + " here.\n")
  }

  render() {
    const { log, location, Move, Take } = this.props

    return (
      <div className="game">
        {/* <CurrentLocation location={location} /> */}
        <Log log={log} />
        <ControlPanel Move={this.Move} Take={this.Take} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    location: state.location,
    log: state.log
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
    removeItemFromLoc: itemName => {
      console.log(itemName)
      dispatch(removeItemFromLoc(itemName))
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
