import React, {useEffect, useState} from 'react';
import Card from './components/Card';
import PokemonSpinner from './components/PokemonSpinner';

import axios from 'axios';

import './App.css';

  function App() {

  const [pokemon, setPokemon] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    }
  ])

  const getPokemones = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
        console.log(response) 
        setPokemon(response.data.results)      
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  useEffect(() => {
   getPokemones();
  })


  return (  
    <div className='App'>
      
     <div style={{ textAling: "center"}}>
      <img 
      alt='pokemon!'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png'
      width={300}      
     />
      <div>
      <PokemonSpinner />
      </div> 
      <div>        
       <Card pokemon={pokemon} />      
      </div>
    </div>

    </div>

  );
}

export default App;
