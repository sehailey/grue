import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Navbar, Log, Interpreter} from '../components'
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

    render() {
        const {log} = this.props

        return (
            <div className="container">
                <Navbar moves={this.state.moves} />
                <Log log={log} />

                <Interpreter
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
