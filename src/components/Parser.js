import React, { Component } from 'react'
import { verbs } from './verbs'
import { items } from './items'
import { doActionToObject, addLog } from './store'

const prepositions = ['AN', 'A', 'THE']

const dictionary = verbs.concat(items).concat(prepositions)
console.log(dictionary)

class Parser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verb: '',
            noun1: ''
        }
    }

    render() {
        const { input, doAction } = this.props.input.toString().toUpperCase()
        this.setState({ verb: input[0], noun1: input[1] })
        doAction()

        return <div />
    }
}

const mapState = state => ({
    location: state.location,
    player: state.player
})

export default Parser
