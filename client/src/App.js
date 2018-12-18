import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './index.css'
import { Game } from './components'
import store from './store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    )
  }
}
export default App
