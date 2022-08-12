import React from 'react'

const CardItem = ( {name ,sprite} ) => {

  return (
      <div className="card">
           <img className='poke-img' src={sprite} alt={name} />
           <h2 className='poke-name'>{name.toUpperCase()}</h2>

      </div>
         
  
  )
}

export default CardItem