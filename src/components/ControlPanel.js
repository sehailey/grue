import React from "react"
import { connect } from "react-redux"
import { move } from "../store"

const ControlPanel = props => {
  const { Move, Take } = props
  return (
    <div className="footer controls">
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => Take("torch").bind(this)}
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
  )
}

const mapState = state => {
  return {
    currentLoc: state.currentLoc
  }
}
const mapDispatch = dispatch => {
  return {
    Move: e => {
      const direction = e.target.name
      dispatch(move(direction))
    },
    Take: item => {
      console.log("you took the item!", item)
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(ControlPanel)
