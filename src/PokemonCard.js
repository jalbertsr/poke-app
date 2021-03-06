import React from 'react'

const PokemonCard = props =>
  <div className='cols-xs-12 col-md-4'>
    <a href={props.url} className='thumbnail'>
      <img src={`http://www.pokestadium.com/sprites/xy/${props.name}.gif`} alt={props.name} />
      <p>{props.name}</p>
    </a>
  </div>

export default PokemonCard
