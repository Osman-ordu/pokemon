import CardItem from './components/CardItem';
import { pokemons } from './mock/mockedData'
import { useState } from 'react';


function App() {
  const [search,setSearch] = useState('')
  return (
    <div className="App">
      <h1 className='app-title'>Pokemon</h1>
      <div className='search-box'>
        <input
        onChange={(e)=>{setSearch(e.target.value)}}
        className='search-input' 
        type="text" />
      </div>
      <div className='card-container'>
      {pokemons   
      .filter((val)=>{if(search === ''){return val}else if(val.name.toLocaleLowerCase().includes(search.toLowerCase())){return val}
      })
      .map((pokemon,prefix)=>(
         <CardItem
         key={prefix}
         name={pokemon.name}
         sprite={pokemon.sprite}
         />  
      ))  
    }
     </div>
    </div>
  );
}

export default App;
