class OBJECT {
    constructor(name, aName, pName) {
        this.name = name
        this.aName = aName
        this.pName = pName
        this.description = ''
        this.contains = []

        this.canExamine = true
        this.canTake = false
        this.canLight = false
        this.canOpen = false

        this.isLit = false
        this.isOpen = false

        this.LIGHT = () => {
            if (this.canLight) this.isLit = !this.isLit
        }

        this.OPEN = () => {
            if (this.canOpen) this.isOpen = !this.isOpen
        }
    }
}

export default OBJECT
