import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Pokemon = ({thisPokemon}) => {

 const [ onePokemon, setOnePokemon] = useState({})

  const getPokemon = (url) =>{
    axios.get(url)
    .then((response) =>{
        console.log(response)
        setOnePokemon(response.data)
    })
    .catch((err) =>{
        console.log(err)
    })    
} 


useEffect(() =>{
    getPokemon(thisPokemon.url)
})

  return (
    <div>
      <p>{ onePokemon.name }</p>
     {/* <img src={onePokemon.sprites} alt=""> </img> */}
    </div>
  )
}

export default Pokemon;