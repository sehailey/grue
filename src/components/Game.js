import React from "react"
import { connect } from "react-redux"
import { move } from "../store"

const Game = props => {
  const { currentLoc, take } = props
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

const mapState = state => {
  return {
    currentLoc: state.currentLoc
  }
}

const mapDispatch = dispatch => {
  return {
    move: direction => {
      dispatch(move(direction))
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(Game)
