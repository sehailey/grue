import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

const Log = props => {
  const { log } = props
  return (
    <ScrollToBottom className="log pt-1 pl-1 align-left">
      {log.join('\n')}
    </ScrollToBottom>
  )
}

export default Log
