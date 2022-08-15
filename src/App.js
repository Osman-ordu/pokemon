import { useState } from 'react';
import SearchBox from './components/InputArea/SearchBox';
import CardContainer from './components/Cards/CardContainer';
import AppTitle from './components/Title/AppTitle';

function App() {
  const [search,setSearch] = useState('')

  return (
    <div className="App">
      <AppTitle />
      <SearchBox searchPokemon = { setSearch } />
      <CardContainer defaultSearch = { search } />  
    </div>
  );
}

export default App;
