import React, { Component } from "react"
import "./App.css"

import { Torch, Map } from "./components"

const map = new Map()

class App extends Component {
  constructor() {
    super()
    this.state = {
      response: "",
      map: map,
      currentLoc: map.currentLoc,
      inv: []
    }
  }

  componentDidMount() {
    console.log(this.state)

    this.callApi()
      .then(res =>
        this.setState({
          response: res.express
        })
      )
      .catch(err => console.log(err))
  }

  async callApi() {
    const response = await fetch("/api/items")
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }

  move(e) {
    const direction = e.target.name

    if (this.state.currentLoc[direction]) {
      this.setState(prevState => {
        return { currentLoc: prevState.currentLoc[direction] }
      })
    } else console.log("you can't go that way.")
  }

  take(item) {
    console.log(this.state)
    const newInv = this.state.inv
    if (this.state.currentLoc.contains[item]) {
      newInv.push(item)
      this.setState(() => {
        return {
          inv: newInv
        }
      })
    }
  }

  render() {
    let loc = this.state.currentLoc

    return (
      <div className="container h-75 App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">grue</h1>
        </header>

        <div className="mt-5 mb-5 game">
          <p className="App-intro">{this.state.currentLoc.describeRoom()}</p>
        </div>

        <div className="controls">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => this.take("torch").bind(this)}
          >
            Take
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="n"
            onClick={this.move.bind(this)}
          >
            n
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="e"
            onClick={this.move.bind(this)}
          >
            e
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="s"
            onClick={this.move.bind(this)}
          >
            s
          </button>
          <button
            type="button"
            className="btn btn-dark"
            name="w"
            onClick={this.move.bind(this)}
          >
            w
          </button>
        </div>

        <p className="App-intro">{this.state.response}</p>
      </div>
    )
  }
}

export default App
