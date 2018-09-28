class OBJECT {
    constructor(name) {
        this.name = name
        this.aName = 'a ' + name
        this.pName = name + 's'
        this.loc = null
        this.description = ''
        this.contains = []

        this.canTake = false

        this.LIGHT = () => {
            return 'You can\'t light that!'
        }

        this.OPEN = () => {
            return 'You can\'t open that!'
        }

        this.READ = () => {
            return 'It doesn\'t say anything very interesting.'
        }

        this.TAKE = () => {
            if (!this.canTake) return 'You can\'t take that!'
            else if (this.loc === 'player') return 'You already have that!'
            else {
                this.loc = 'player'
                return 'Taken.'
            }
        }

        this.DROP = loc => {
            if (!this.loc === 'player') return 'You don\'t have that!'
            else {
                this.loc = loc
                return 'Dropped.'
            }
        }

        this.EXAMINE = () => {
            return this.description
        }
    }
}

export default OBJECT
