import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Navbar, Log, ControlPanel, Parser} from '../components'
import {
    getCurrentLoc,
    addItemToLoc,
    removeItemFromLoc,
    addItemToInv,
    removeItemFromInv,
    getAllItems,
    changeItem,
    move,
    addLog,
} from '../store'

import * as VERB from './verbs'

class Game extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            moves: 0,
        }
    }

    componentDidMount() {
        this.props.fetchLoc()
        this.props.fetchItems()

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.name !== this.props.location.name) {
            console.log(
                'INSIDE UPDATE',
                prevProps.location.name,
                this.props.location.name
            )
            VERB.LOOK(this.props)
        }
    }

    incrementMoves() {
        let newMoves = this.state.moves
        newMoves++
        this.setState(() => ({moves: newMoves}))
    }
    handleChange(event) {
        this.setState({input: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.incrementMoves()
        this.props.addLog('> ' + this.state.input)
        this.dispatchAction(Parser(this.state.input))
        this.setState({input: ''})
    }

    isVisible(item) {
        return item.loc === 'player' || item.loc === this.props.location.name
    }
    findItem(ITEMNAME) {
        let itemName = ITEMNAME.toLowerCase()
        let item = this.props.items.find(ele => ele.name === itemName)
        if (item && this.isVisible(item)) return item
        let itemInsideItem
        this.props.items.map(container => {
            if (
                container.isOpen &&
                container.contains.find(ele => ele.name === itemName)
            )
                itemInsideItem = container.contains.find(
                    ele => ele.name === itemName
                )
            return itemInsideItem
        })
    }

    doActionOnItem(itemName, verb) {
        let item = this.findItem(itemName)
        if (!item) this.props.addLog('You don\'t see that here.')
        else VERB[verb](this.props, item)
    }

    dispatchAction(parsed) {
        if (parsed.isUnknown)
            this.props.addLog(
                'I don\'t know the word ' + parsed.unknown.toLowerCase() + '.'
            )
        else if (parsed.isInv) VERB.INV(this.props)
        else if (parsed.isLook) VERB.LOOK(this.props)
        else if (parsed.isMove) VERB.MOVE(this.props, parsed.direction)
        else if (parsed.doActionOnItem) {
            this.doActionOnItem(parsed.item, parsed.verb)
        } else this.props.addLog('I\'m not sure what you\'re trying to say.')
    }

    render() {
        const {log} = this.props

        return (
            <div className="container">
                <Navbar moves={this.state.moves} />
                <Log log={log} />

                <ControlPanel
                    value={this.state.input}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

const mapState = state => {
    return {
        log: state.log,
        location: state.location,
        items: state.items,
        player: state.player,
    }
}

const mapDispatch = dispatch => {
    return {
        fetchLoc: () => {
            dispatch(getCurrentLoc())
        },
        fetchItems: () => {
            dispatch(getAllItems())
        },
        addLog: log => {
            dispatch(addLog(log))
        },
        dispatchMove: direction => {
            dispatch(move(direction))
        },
        take: item => {
            dispatch(removeItemFromLoc(item))
            dispatch(addItemToInv(item))
        },
        drop: item => {
            dispatch(addItemToLoc(item))
            dispatch(removeItemFromInv(item))
        },

        changeItem: item => {
            dispatch(changeItem(item))
        },
    }
}

export default connect(
    mapState,
    mapDispatch
)(Game)
