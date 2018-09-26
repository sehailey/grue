const Move = (props, d) => {
    const direction = d.toLowerCase()
    const {location} = props

    if (location[direction]) {
        props.dispatchMove(direction)
    } else props.addLog('You can\'t go that way.')
}

export default Move
