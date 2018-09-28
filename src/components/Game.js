import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Log, ControlPanel, Parser} from '../components'
import {
    getCurrentLoc,
    addItemToLoc,
    removeItemFromLoc,
    addItemToInv,
    removeItemFromInv,
    changeItemInInv,
    changeItemInLoc,
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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        const parsed = Parser(this.state.input)
        this.setState({input: ''})
        console.log(parsed)
        this.dispatchAction(parsed)
    }

    doActionOnItem(item, verb) {
        const playerItem = this.props.player.inv.find(
            ele => ele.name === item.toLowerCase()
        )
        const locationItem = this.props.location[item]
        if (playerItem) {
            const action = playerItem[verb]()
            this.props.addLog(action)
            this.props.changeItemInInv(this.props.player)
        } else if (locationItem) {
            const action = locationItem[verb]()
            this.props.addLog(action)
            this.props.changeItemInLoc(this.props.location)
        }
    }
    dispatchAction(parsed) {
        if (parsed.isUnknown)
            this.props.addLog(
                'I don\'t know the word ' + parsed.unknown.toLowerCase() + '.'
            )
        else if (parsed.isLook) VERB.LOOK(this.props)
        else if (parsed.isInv) this.props.addLog(this.props.player.inv)
        else if (parsed.isMove) VERB.MOVE(this.props, parsed.direction)
        else if (parsed.verb === 'TAKE') VERB.TAKE(this.props, parsed.item)
        else if (parsed.verb === 'DROP') VERB.DROP(this.props, parsed.item)
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
        location: state.location,
        log: state.log,
        player: state.player,
    }
}

const mapDispatch = dispatch => {
    return {
        fetchLoc: () => {
            dispatch(getCurrentLoc())
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
        changeItemInInv: (item, verb) => {
            dispatch(changeItemInInv(item, verb))
        },
        changeItemInLoc: (item, verb) => {
            dispatch(changeItemInLoc(item, verb))
        },
    }
}

export default connect(
    mapState,
    mapDispatch
)(Game)
