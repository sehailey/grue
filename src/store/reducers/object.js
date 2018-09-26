/*** ACTION TYPES ***/
const DO_ACTION_ON_OBJECT = 'DO_ACTION_ON_OBJECT'

/*** INITIAL STATE ***/
const defaultObject = {}

/*** ACTION CREATORS ***/
export const doActionOnObject = action => ({
    type: DO_ACTION_ON_OBJECT,
    action
})

export default function(object = defaultObject, action) {
    switch (action.type) {
    case DO_ACTION_ON_OBJECT: {
        const newObject = { ...object }
        newObject.action()
        return newObject
    }

    default: {
        return object
    }
    }
}
