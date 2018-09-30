import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Navbar, Log, ControlPanel, Parser} from '../components'
import {getCurrentLoc, getAllItems, updateItems, move, addLog} from '../store'

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
        //this.itemContainer = this.itemContainer.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.name !== this.props.location.name) {
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

    findItem(ITEMNAME) {
        let itemName = ITEMNAME.toLowerCase()
        return this.props.items.find(item => item.name === itemName)
    }

    itemIsInInv(item) {
        return item.loc === 'player'
    }

    itemIsInCurrentLoc(item) {
        return item.loc === this.props.location.name
    }

    // only return container if it is another item
    itemIsInContainer(item) {
        return this.props.items.find(i => i.name === item.loc)
    }

    itemIsVisible(item) {
        if (this.itemIsInInv(item) || this.itemIsInCurrentLoc(item)) return true
        else {
            let container = this.itemIsInContainer(item)
            if (container) {
                return (
                    (this.itemIsInInv(container) && container.isOpen) ||
                    (this.itemIsInCurrentLoc(container) && container.isOpen)
                )
            }
        }
    }

    doActionOnItem(verb, item1Name, prep, item2Name) {
        let item1 = this.findItem(item1Name)
        let item2 = null
        let itemNotHere = false

        if (item2Name) {
            item2 = this.findItem(item2Name)
            if (!this.itemIsVisible(item2)) itemNotHere = true
        }

        if (!this.itemIsVisible(item1)) itemNotHere = true

        if (itemNotHere) this.props.addLog('You don\'t see that here.')
        else {
            VERB[verb](this.props, item1, prep, item2)
            this.props.updateItems(this.props.items)
        }
        VERB[verb](this.props, item1, prep, item2)
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
            this.doActionOnItem(
                parsed.verb,
                parsed.item1,
                parsed.prep,
                parsed.item2
            )
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

        updateItems: item => {
            dispatch(updateItems(item))
        },
    }
}

export default connect(
    mapState,
    mapDispatch
)(Game)
