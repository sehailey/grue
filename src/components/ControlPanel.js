import React from 'react'

const ControlPanel = props => {
    const {Move, Take, Drop, handleSubmit, handleChange, value} = props
    return (
        <div className="control-panel mt-2">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col">
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter command"
                        />
                    </div>
                    {/* <div className="col">
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
                            onClick={Move}
                        >
                            n
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark"
                            name="e"
                            onClick={Move}
                        >
                            e
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark"
                            name="s"
                            onClick={Move}
                        >
                            s
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark"
                            name="w"
                            onClick={Move}
                        >
                            w
                        </button>
                    </div> */}
                </div>
            </form>
        </div>
    )
}

export default ControlPanel
