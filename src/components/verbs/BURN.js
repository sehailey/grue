const BURN = function(props, item) {
    const action = item.BURN()
    props.addLog(action)
}

export default BURN
