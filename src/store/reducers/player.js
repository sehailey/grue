const ADD_ITEM_TO_INV = "ADD_ITEM_TO_INV"
const REMOVE_ITEM_FROM_INV = "REMOVE_ITEM_FROM_INV"

export const addItemToInv = text => ({
  type: ADD_ITEM_TO_INV,
  text
})

export const removeItemFromInv = text => ({
  type: REMOVE_ITEM_FROM_INV,
  text
})

const defaultPlayer = {
  name: "notnull",
  inv: []
}

export default function(player = defaultPlayer, action) {
  switch (action.type) {
    case ADD_ITEM_TO_INV: {
      const item = action.item
      return { ...player, inv: player.inv.push(action.item) }
    }
    case REMOVE_ITEM_FROM_INV: {
      return {
        ...player,
        inv: [player.inv.filter(item => item.name !== action.item)]
      }
    }
    default: {
      return player
    }
  }
}
