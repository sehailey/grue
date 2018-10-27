const FIND_ITEM = 'FIND_ITEM'

export const findItem = item => ({
  type: FIND_ITEM,
  item,
})

const defaultItem = {}

/** REDUCER **/
export default function(item = defaultItem, action) {
  switch (action.type) {
    case FIND_ITEM: {
      return item
    }
    default: {
      return items
    }
  }
}
