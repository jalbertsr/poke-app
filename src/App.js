import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    )
  }
}

export default App
