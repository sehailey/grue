import {ROOM} from '../classes'

const westOfHouse = new ROOM('WestOfHouse')
westOfHouse.isBlocked = {
    E: 'The door is boarded and you can\'t remove the boards.',
}
westOfHouse.title = 'West of House'
westOfHouse.description =
    'This is an open field west of a white house, with a boarded front door. There is a small mailbox here.'

export default westOfHouse
