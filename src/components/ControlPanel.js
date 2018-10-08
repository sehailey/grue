import React from 'react'

const ControlPanel = props => {
    const {handleKeyDown, handleSubmit, handleChange, value} = props
    return (
        <div className="control-panel mt-2">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col">
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className="form-control"
                            placeholder="Enter command"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ControlPanel
