class Room {
    constructor(name) {
        this.name = name
        this.title = ''
        this.description = ''

        this.N = null
        this.S = null
        this.E = null
        this.W = null

        this.isBlocked = {N: null, S: null, E: null, W: null}
        this.isLit = true

        this.describeLocation = () => {
            return this.description
        }
    }
}

export default Room
