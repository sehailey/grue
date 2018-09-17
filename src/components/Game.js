import React, { Component } from "react"
import { connect } from "react-redux"
import { getCurrentLoc, move } from "../store"

class Game extends Component {
  constructor() {
    super()
    this.state = {
      currentLoc: {}
    }
  }

  componentDidMount() {
    this.props.fetchLoc()
  }

  render() {
    const { currentLoc, take } = this.props
    if (!currentLoc) return <div />
    return (
      <div className="mt-5 mb-5 game">
        <p className="App-intro">{currentLoc.describeRoom()}</p>

        <div className="controls">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => take("torch").bind(this)}
          >
            Take
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="n"
            onClick={move.bind(this)}
          >
            n
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="e"
            onClick={move.bind(this)}
          >
            e
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="s"
            onClick={move.bind(this)}
          >
            s
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="w"
            onClick={move.bind(this)}
          >
            w
          </button>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    currentLoc: state.currentLoc
  }
}

const mapDispatch = dispatch => {
  return {
    move: direction => {
      dispatch(move(direction))
    },
    fetchLoc: () => {
      dispatch(getCurrentLoc())
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(Game)
