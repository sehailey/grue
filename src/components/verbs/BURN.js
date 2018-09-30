const BURN = function(props, item1, prep, item2, command) {
    let log
    if (prep === 'ON' && command[4] === 'FIRE') {
        let fire = props.items.find(item => item.loc === 'player' && item.isLit)
        if (!fire) log = 'You don\'t have anything to set it on fire with.'
        else if (!item1.isFlammable) log = 'It doesn\'t seem to have any effect.'
        else {
            log = item1.BURN()
        }
    }

    props.addLog(log)
}

export default BURN
