import React from "react"

const ControlPanel = props => {
  const { Move, Take, Drop } = props
  return (
    <div className="control-panel">
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
        name="torch"
        className="btn btn-dark"
        onClick={Drop}
      >
        Drop
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
