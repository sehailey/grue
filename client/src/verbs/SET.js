const SET = (props, item1, prep, item2) => {
    let log = 'I\'m not sure what you\'re trying to say.'

    if (prep === 'ON' && item2.name === 'FIRE') {
        log = item1.BURN()
    }

    props.addLog(log)
}

export default SET
