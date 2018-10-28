export default props => {
  const { items, player } = props

  const visibleOpenContainerNames = items
    .filter(item => item.isContainer && item.isOpen && (item.loc === 'player' || item.loc === player.currentLoc))
    .map(item => item.name)
  console.log('visible open container names:', visibleOpenContainerNames)

  // visible items = items in inv, items in loc, or items in containers that are in inv or loc
  const visibleItems = items.filter(
    item => item.loc === player.currentLoc || item.loc === 'player' || visibleOpenContainerNames.includes(item.loc)
  )
  console.log('inside of findVisibleItems, visibleItems:', visibleItems)
  return visibleItems
}
