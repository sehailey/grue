import React from "react"

const Log = props => {
  console.log(props.log)
  return <div className="log">{props.log.join("\n")}</div>
}

export default Log
