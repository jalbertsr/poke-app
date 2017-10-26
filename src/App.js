import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import NotFound from './NotFound'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={NotFound} /> {/* Revisar https://stackoverflow.com/a/42929686/6334411 */}
      </Switch>
    )
  }
}

export default App
