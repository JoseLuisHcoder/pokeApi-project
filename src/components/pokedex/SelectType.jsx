import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style/selectType.css'

const SelectType = ({setOptionType, optionType, setPokeSearch, setpage}) => {

    const [listType, setListType] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/type/`
        axios.get(URL)
            .then(res => setListType(res.data.results))
            .catch(err => console.log(err))

    }, [])

    const handleChange = e => {
        setOptionType(e.target.value)
        setPokeSearch('')
        setpage(1)
    }
    
  return (
    <select  className='btn__option' value={optionType} onChange={handleChange}>
        <option  value="All">All Pokemons</option>
        {
            listType?.map(type =>(
                
                   <option key={type.name} value={type.name}>{type.name}</option> 
                            ))
        }
    </select>
  )
}

export default SelectType