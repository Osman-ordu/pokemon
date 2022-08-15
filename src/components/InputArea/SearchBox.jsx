import React from 'react'

const SearchBox = (props) => {
  const searchElement = (e) => {
    props.searchPokemon(e.target.value)
  } 
  return (
    <div className='search-box'>
    <input onChange={searchElement} className='search-input' type="text" />
  </div>
  )
}

export default SearchBox