import { pokemons } from '../../mock/mockedData'
import CardItem from './CardItem';


const CardContainer = (props) => {
  const searchArea =  props.defaultSearch 
    return(
      <div className='card-container'>
      {pokemons.filter((result)=> {
        if(searchArea === ''){
        return result}else if(result.name.toLocaleLowerCase().includes(searchArea.toLowerCase())){
          return result}
      }).map((item,index)=>(
         <CardItem key={ index } name={ item.name } sprite={ item.sprite } />  
      ))  
    }
     </div>
    )  
}

export default CardContainer

  