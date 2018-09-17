import React, { Component } from "react"
import { connect } from "react-redux"
import { getCurrentLoc, move } from "../store"

class Game extends Component {
  componentDidMount() {
    this.props.fetchLoc()
  }

  render() {
    const { Move, location, take } = this.props

    return (
      <div className="mt-5 mb-5 game">
        <p className="App-intro">{location.description}</p>

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
            onClick={Move.bind(this)}
          >
            n
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="e"
            onClick={Move.bind(this)}
          >
            e
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="s"
            onClick={Move.bind(this)}
          >
            s
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="w"
            onClick={Move.bind(this)}
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
    location: state.location
  }
}

const mapDispatch = dispatch => {
  return {
    Move: e => {
      const direction = e.target.name
      console.log(direction)
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
