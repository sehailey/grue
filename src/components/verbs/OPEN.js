const Open = (props, i) => {
    const itemName = i.toLowerCase()
    const item = props.location[itemName]
    if (item) console.log(item)
}

export default Open
