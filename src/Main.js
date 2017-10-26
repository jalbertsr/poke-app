import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

export default class Main extends Component {
  constructor () {
    super()

    this.state = {
      value: '',
      pokemons: []
    }
    //this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('http://pokeapi.salestock.net/api/v2/pokedex/national')
    .then(data => data.json())
    .then(res => res.pokemon_entries)
    .then(res => {
      this.setState({
        pokemons: res,
      })
      console.log(this.state.pokemons[0])
    })
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
    console.log('filtrar pokemon segun ->', e.target.value)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
        </form>
        <div className='row'>
          {
            this.state.pokemons.map((pokemon,i) => (
              <PokemonCard
                key={i} 
                url={this.state.pokemons[i].pokemon_species.url}
                name={this.state.pokemons[i].pokemon_species.name}
              />
              ))
          }
        </div>
      </div>
    )
  }
}
