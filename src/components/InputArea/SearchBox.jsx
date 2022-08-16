import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {
  const searchElement = (e) => {
    props.searchPokemon(e.target.value)
  } 
  return (
    <div className='search-box'>
    <input placeholder='Search...' 
    onChange={searchElement} 
    className='search-input' 
    type="search" />
  </div>
  )
}

export default SearchBox