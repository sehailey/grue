const Light = function(props, item) {
    const action = item.LIGHT()
    props.addLog(action)
}

export default Light
