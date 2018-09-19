import React, { Component } from "react"
import { connect } from "react-redux"
import { Log, ControlPanel, CurrentLocation } from "../components"
import { getCurrentLoc } from "../store"

class Game extends Component {
  componentDidMount() {
    this.props.fetchLoc()
  }

  render() {
    const { location } = this.props

    return (
      <div className="game">
        <CurrentLocation location={location} />
        <Log log={this.log} />
        <ControlPanel />
      </div>
    )
  }
}

const mapState = state => {
  return {
    location: state.location
  }
}

const mapDispatch = dispatch => {
  return {
    fetchLoc: () => {
      dispatch(getCurrentLoc())
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(Game)
