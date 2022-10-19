import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './pokedex/Pagination'
import PokemonCard from './pokedex/PokemonCard'
import SearchInput from './pokedex/SearchInput'
import SelectType from './pokedex/SelectType'
import './pokedex/style/pokedex.css'


const Pokedex = () => {
    const [pokemons, setPokemons] = useState()
    const [pokeSearch, setPokeSearch] = useState()
    const [optionType, setOptionType] = useState('All')
    
    useEffect(()=>{
        
        if(optionType !== 'All'){
            const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
            axios.get(URL)
                .then(res =>{
                    const arr = res.data.pokemon.map(e => e.pokemon)
                    setPokemons({results:arr})
                })
                .catch(err => console.log(err))

        }else if(pokeSearch){
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
            const obj = {
                results:[
                    {
                        url
                    }
                ]
            }
            setPokemons(obj)

        }else{
            const URL = 'https://pokeapi.co/api/v2/pokemon'
            axios.get(URL)
                .then(res => setPokemons(res.data))
                .catch(err => console.log(err))
        }

    }, [pokeSearch, optionType] )

    //LOGICA paginacion
    const [page, setpage] = useState(1)
    //pero no se puede poner 1000 paginas ya que no hay, por tanto se debe poner un limite
    const [pokePerPage, setPokePerPage] = useState(8)
        // page 1 - 1    va dar  8 = 0
        // page 2 - 1   va dar  8 = 8
        // page 3 - 1   va dar  8 = 16
    const initialPoke = (page - 1) * pokePerPage
    const finalPoke = page * pokePerPage


    const nameTrainer = useSelector(state => state.nameTrainer)
  return (
    <div>
        <header className='poke__header'>
            <img className='poke__img' src="./images/pokeunite.png" alt="" />
        <div className='poke__welcome'>
            <h2 className='poke__welcome__user'>Welcome {nameTrainer}, Catch them All</h2>
            <div className='poke__search'>
                <span className='poke__input'>
                    <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
                </span>
                <span>
                    <SelectType setpage={setpage} setPokeSearch={setPokeSearch} optionType={optionType} setOptionType= {setOptionType}/>
                </span>
                <Pagination 
                setpage={setpage} 
                page={page}
                pagesLength={pokemons && Math.ceil(pokemons?.length/ pokePerPage)}
                />
            </div>

        </div>
        </header>
        
        <div className='card__container'>
        {
            pokemons?.results.slice(initialPoke, finalPoke).map(pokemon => (
                <PokemonCard 
                key={pokemon.url} 
                url={pokemon.url}/>
            ))
        }

        </div>
        
    </div>
  )
}

export default Pokedex