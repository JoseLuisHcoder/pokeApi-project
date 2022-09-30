import React from 'react'
import './style/pokemonsCard.css'

const StatPokemon = ({infoStat, pokemon}) => {

  return (
    <li className='stat'>
      <div className='stat__card'>
        <h4 className='stat__name'>{infoStat.stat.name}</h4>
        <p className={`stat__info }`} >{infoStat.base_stat}</p>

      </div>
    </li>
  )
}

export default StatPokemon 