class OBJECT {
    constructor(name, aName, pName) {
        this.name = name
        this.aName = aName
        this.pName = pName
        this.description = ''
        this.contains = []

        this.isInv = false
        this.canExamine = true
        this.canTake = false
        this.canLight = false
        this.canOpen = false

        this.isLit = false
        this.isOpen = false

        // this.LIGHT = () => {
        //     return 'You can\'t light that!'
        // }

        this.LIGHT = this.LIGHT.bind(this)

        this.OPEN = () => {
            return 'You can\'t open that!'
        }

        this.READ = () => {
            return 'It doesn\'t say anything very interesting.'
        }
    }

    LIGHT() {
        return 'You can\'t light that!'
    }
}

export default OBJECT
