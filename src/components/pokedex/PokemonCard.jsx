import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatPokemon from './StatPokemon'
import './style/pokemonsCard.css'
import './style/statPokemon.css'


const PokemonCard = ({url}) => {
const [pokemon, setPokemon] = useState()
const navigate = useNavigate()

useEffect(()=>{
    axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
}, [])

const handleClick = () => navigate(`/pokedex/${pokemon.name}`)

  return (
    <article className={`card bg-${pokemon?.types[0].type.name}`} onClick={handleClick}>
        <header className= {`card__header bg-${pokemon?.types[0].type.name}`}>
            <img className='card__avatar' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <div className={`card__main bg-${pokemon?.types[0].type.name}`}>

            <section className='card__body'>
                <h3 className='card__name'>{pokemon?.name}</h3>
                <span className='card__list__type'>
                    {
                        pokemon?.types.map(slot => (
                            <span className={`card__type bg-${pokemon?.types[0].type.name}`} key={slot.type.url}>{slot.type.name}</span>
                        ))
                    }
                </span>
            </section>
            <footer className='card__footer'>
                <div className='card__list__stats'>
                    {
                        pokemon?.stats.map(stat =>(
                            <StatPokemon 
                            key={stat.stat.url}
                            infoStat={stat}
                            />
                        ))
                    }
                </div>
                
            </footer>
        </div>
    </article>
  )
}

export default PokemonCard