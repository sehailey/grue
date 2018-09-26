const ADD_ITEM_TO_INV = 'ADD_ITEM_TO_INV'
const REMOVE_ITEM_FROM_INV = 'REMOVE_ITEM_FROM_INV'

export const addItemToInv = item => ({
    type: ADD_ITEM_TO_INV,
    item,
})

export const removeItemFromInv = item => ({
    type: REMOVE_ITEM_FROM_INV,
    item,
})

const defaultPlayer = {
    name: 'notnull',
    inv: [],
}

export default function(player = defaultPlayer, action) {
    switch (action.type) {
    case ADD_ITEM_TO_INV: {
        const newInv = player.inv.concat(action.item)
        return {...player, inv: newInv}
    }
    case REMOVE_ITEM_FROM_INV: {
        const newInv = player.inv.filter(
            ele => ele.name !== action.item.name
        )
        return {...player, inv: newInv}
    }
    default: {
        return player
    }
    }
}
