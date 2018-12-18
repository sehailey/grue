import store, { addLog } from '../../../store'
const open = item => {
  if (item.name === 'window') console.log(item)
  const result = item.open()

  return store.dispatch(addLog(result.log))
}

export default open
