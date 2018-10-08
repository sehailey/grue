import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

const Log = props => {
    return (
        <ScrollToBottom className="log pt-1 pl-1 align-left">
            {props.log.join('\n')}
        </ScrollToBottom>
    )
}

export default Log
