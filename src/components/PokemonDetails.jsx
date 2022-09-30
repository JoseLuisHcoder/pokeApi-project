import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './pokedex/style/pokemonDetails.css'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()
     const {name} = useParams()

useEffect(()=>{
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
  axios.get(URL)
    .then(res => setPokeInfo(res.data))
    .catch(err => console.log(err))
}, [])

     return (
    <article>
      <header className='details__header'>
            <img className='details__img' src="./images/pokeunite.png" alt="" />
        <div className='details__welcome'>
            <h2 className='details__user'>  Details and Statistics</h2>
            
        </div>
        </header>
      <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
      <h1>{name}</h1>
    </article>
  )
}

export default PokemonDetails