import React, { Component } from 'react'
import { Game } from './components'

class App extends Component {
  constructor () {
    super()
    this.state = {
      response: ''
    }
  }

  componentDidMount () {
    this.callApi()
      .then(res =>
        this.setState({
          response: res.express
        })
      )
      .catch(err => console.log(err))
  }

  async callApi () {
    const response = await fetch('/api/items')
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)

    return body
  }

  render () {
    return (
      <div className="container">
        <Game />
        <p className="intro">{this.state.response}</p>
      </div>
    )
  }
}

export default App
