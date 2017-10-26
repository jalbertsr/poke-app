import React from 'react'
const PokemonCard = props =>
  <div className='row'>
    <div className='col-md-4'>
      <a href={props.url} className='thumbnail'>
        <img src={`http://www.pokestadium.com/sprites/xy/${props.name}.gif`} alt={props.name} />
        <p>{props.name}</p>
      </a>
    </div>
  </div>

export default PokemonCard
