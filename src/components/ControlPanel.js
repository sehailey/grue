import React from "react"
import { connect } from "react-redux"
import { move } from "../store"

const ControlPanel = props => {
  const { location, Move, Take } = props
  return (
    <div className="navbar-static-bottom control-panel" id="footer">
      <button
        type="button"
        name="torch"
        className="btn btn-dark"
        onClick={Take}
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

export default ControlPanel
