const CLOSE = (props, item) => {
    const action = item.CLOSE(props)
    props.addLog(action)
}

export default CLOSE
