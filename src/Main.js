import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import { Input, Pagination } from 'antd'

export default class Main extends Component {
  constructor () {
    super()

    this.state = {
      value: '',
      pokemons: [],
      current: 1
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

  onPageChange = (page) => {
    this.setState({
      current: page,
    });
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
    console.log('filtrar pokemon segun ->', e.target.value)
  }

  render () {
    const regex = new RegExp(this.state.value,'g')
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChange} />
        </form>
        <div className='row'>
          {
            this.state.pokemons
            .filter(pokemon => pokemon.pokemon_species.name === '' || pokemon.pokemon_species.name .includes(this.state.value))
            .map((pokemon,i) => (
              <PokemonCard
                key={i} 
                id={i}
                url={this.state.pokemons[i].pokemon_species.url}
                name={this.state.pokemons[i].pokemon_species.name}
              />
              ))
          }
        </div>
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </div>
    )
  }
}
