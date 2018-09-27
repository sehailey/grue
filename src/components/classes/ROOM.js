class Room {
    constructor(name) {
        this.name = name
        this.description = ''

        this.N = null
        this.S = null
        this.E = null
        this.W = null

        this.contains = []
        this.describe = () => {
            const desc = [this.description, this.describeItems()].join(' ')
            return desc
        }

        this.describeLocation = () => {
            return this.description
        }

        this.describeItems = () => {
            let items = this.contains.map(item => item.name)
            if (items.length === 0) return ''
            if (items.length === 1) return 'You see ' + items[0] + 'here.'
            if (items.length === 2)
                return 'You see' + items[0] + ' and ' + items[1] + ' here.'
            if (items.length > 2)
                return (
                    'You see' +
                    items.slice(0, items.length - 2).join(', ') +
                    'and ' +
                    items[items.length - 1] +
                    ' here.'
                )
        }
    }
}

export default Room
