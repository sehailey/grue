import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Log, ControlPanel, Parser} from '../components'
import {
    doActionOnObject,
    getCurrentLoc,
    addItemToLoc,
    removeItemFromLoc,
    addItemToInv,
    removeItemFromInv,
    move,
    addLog,
} from '../store'

import {DoActionOnItem, Move, Look} from './verbs/'

class Game extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
        }
    }
    componentDidMount() {
        this.props.fetchLoc()
        //this.Take = this.Take.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.location.description !== this.props.location.description
        ) {
            this.props.addLog(this.props.location.description)
        }
    }

    handleChange(event) {
        this.setState({input: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addLog('> ' + this.state.input)
        const parsed = Parser(this.state.input)
        this.setState({input: ''})
        console.log(parsed)
        this.dispatchAction(parsed)
    }

    dispatchAction(parsed) {
        if (parsed.isUnknown)
            this.props.addLog(
                'I don\'t know the word ' + parsed.unknown.toLowerCase() + '.'
            )
        else if (parsed.isLook) Look(this.props)
        else if (parsed.isInv) this.props.addLog(this.props.player.inv)
        else if (parsed.isDirection) Move(this.props, parsed.direction)
        else if (parsed.doActionOnItem)
            DoActionOnItem(this.props, parsed.verb, parsed.noun)
        else this.props.addLog('I\'m not sure what you\'re trying to say.')
    }

    render() {
        const {log} = this.props

        return (
            <div className="container">
                <Navbar />
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
        doActionOnObject: action => {
            dispatch(doActionOnObject(action))
        },
    }
}

export default connect(
    mapState,
    mapDispatch
)(Game)
