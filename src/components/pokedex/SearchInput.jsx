import React from 'react'
import './style/searchInput.css'

const SearchInput = ({setPokeSearch, setOptionType}) => {

    const handleSubmit = e => { 
        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim())
        setOptionType('All')
        e.target.searchText.value = ""
    }

  return (
    <form onSubmit={handleSubmit}>
        <button className='btn'>Search</button>
        <input className='input' id="searchText" type="text" placeholder='Enter name or id of Pokemon'/>
    </form>
  )
}

export default SearchInput