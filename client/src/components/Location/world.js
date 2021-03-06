import locConstructors from '../../components/Location/constructors'
import * as locations from '../../components/Location/locations'

import itemConstructors from '../../components/Items/constructors'
import * as ITEMS from '../../components/Items/items'

//import axios from 'axios'
//import Location from '../../components/Location'

export const buildWorld = () => {
  let world = {}
  locConstructors.map(constructor => {
    try {
      let result = new locations[constructor.name](constructor)
      world[constructor.name] = result
      return new locations[constructor.name](constructor)
    } catch (e) {
      console.log(constructor.name + ' not a valid location.')
      return e
    }
  })
  let itemMap = {}
  itemConstructors.map(constructor => {
    try {
      itemMap[constructor.name] = new ITEMS[constructor.name](constructor)
      return new ITEMS[constructor.name](constructor)
    } catch (e) {
      console.log(constructor.name + ' not a valid item.')
      return e
    }
  })

  const {
    westOfHouse,
    northOfHouse,
    behindHouse,
    livingRoom,
    attic,
    clearing,
    forest1,
    forest2,
    forest3,
    forest4,
    forestPath,
    kitchen,
    southOfHouse,
    upTree
  } = world

  itemMap.mailbox._addItem(itemMap.leaflet)
  world.westOfHouse._addItem(itemMap.mailbox)
  world.behindHouse._addItem(itemMap.sack)
  world.behindHouse._addItem(itemMap.window)
  world.kitchen._addItem(itemMap.window)
  itemMap.table._addItem(itemMap.bottle)
  itemMap.table._addItem(itemMap.sack)
  world.kitchen._addItem(itemMap.table)

  westOfHouse.addLoc('N', northOfHouse)
  westOfHouse.addLoc('S', southOfHouse)
  westOfHouse.addLog(
    'E',
    'The door is boarded and you can\'t remove the boards.'
  )

  kitchen.addLoc('E', behindHouse)
  kitchen.addLoc('W', livingRoom)
  livingRoom.addLoc('E', kitchen)
  kitchen.addLoc('U', attic)
  attic.addLoc('DEATH', forest1)
  attic.addLog('N', clearing)

  northOfHouse.addLoc('N', forestPath)
  northOfHouse.addLoc('E', behindHouse)
  northOfHouse.addLog('S', 'The windows are all boarded.')
  northOfHouse.addLoc('W', westOfHouse)

  southOfHouse.addLog('N', 'The windows are all boarded.')
  southOfHouse.addLoc('W', westOfHouse)

  behindHouse.addLoc('N', northOfHouse)
  behindHouse.addLoc('E', clearing)
  behindHouse.addLoc('S', southOfHouse)
  behindHouse.addLoc('W', kitchen)

  clearing.addLog('N', 'The forest becomes inpenetrable to the north.')
  clearing.addLoc('E', forest2)
  clearing.addLoc('S', forestPath)
  clearing.addLoc('W', forest1)

  forestPath.addLoc('N', clearing)
  forestPath.addLoc('U', upTree)
  forestPath.addLoc('S', northOfHouse)

  forest1.addLoc('N', clearing)
  forest1.addLoc('E', forestPath)
  forest1.addLoc('S', forest3)

  forest2.addLoc('E', forest4)
  forest2.addLoc('S', forest3)
  forest2.addLoc('W', forestPath)

  forest3.addLoc('N', clearing)
  forest3.addLoc('NW', southOfHouse)
  forest3.addLoc('W', forest1)
  forest3.addLog('S', 'Storm-tossed trees block your way.')
  forest3.addLog('SE', 'The rank undergrowth prevents eastward movement.')

  forest4.addLoc('N', forest2)
  forest4.addLog('E', 'The mountains are impassable.')
  forest4.addLoc('S', forest2)
  forest4.addLog('W', 'You can\'t go that way.')

  return world
}

const world = buildWorld()
export default world
