import { Item } from '../../classes'

export const house = new Item('house')

house.loc = 'thehouse'

export { default as mailbox } from './mailbox'
export { default as windows } from './window'
