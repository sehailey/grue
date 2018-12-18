const BURN = function(props, item1, prep, item2) {
    let log

    let fire = props.items.find(item => item.loc === 'player' && item.isLit)
    if (!fire) log = 'You need a flame first.'
    else if (!item1.isFlammable) log = 'It doesn\'t seem to have any effect.'
    else {
        log = item1.BURN()
    }

    props.addLog(log)
}

export default BURN
