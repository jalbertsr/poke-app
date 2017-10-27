import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import { PokemonDetail } from './PokemonDetail'
import NotFound from './NotFound'
import './App.css'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/pokemon/:id' component={PokemonDetail} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App
