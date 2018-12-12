import { Item, InvItem } from './classes'

export const mailbox = new Item({
  id: 1,
  name: 'mailbox',
  description: 'It\'s a mailbox',
  loc: 'here'
})

export const torch = new InvItem({
  id: 2,
  name: 'torch',
  description: 'It\'s a torch',
  loc: 'player'
})
export const key = new InvItem({
  id: 3,
  name: 'key',
  description: 'It\'s a key',
  loc: 'here'
})

export const leaflet = new InvItem({
  id: 4,
  name: 'leaflet',
  description: 'leafletssssss',
  loc: 'nowhere'
})

leaflet.TAKE = () => 'YEEEAAAHHHHH'
