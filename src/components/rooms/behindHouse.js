import {ROOM} from '../classes'

const behindHouse = new ROOM('behindHouse')
behindHouse.title = 'Behind House'

behindHouse.isBlocked = {
    W: 'The window is closed',
}

behindHouse.descriptions = {
    open: 'open',
    ajar: 'slightly ajar',
}

behindHouse.windowDescription = behindHouse.descriptions.ajar

behindHouse.description =
    'You are behind the white house. A path leads into the forest to the east. In one corner of the house there is a small window which is ' +
    behindHouse.windowDescription +
    '.'

behindHouse.OPEN = item => {
    if (!item === window) return 'that\'s weird.'
    this.windowDescription = this.descrptions.open
    this.isBlocked = false
    return 'With great effort, you open the window far enough to allow entry.'
}

behindHouse.CLOSE = () => {
    this.windowDescription = this.descrptions.closed
    this.isBlocked = true
    return 'The window closes (more easily than it opened).'
}
export default behindHouse
