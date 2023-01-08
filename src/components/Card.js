import React from "react";
import Pokemon from './Pokemon';


const Card = ({pokemon}) => {

    return(
        <div className="d-flex justify-content-center flex-row flex-wrap text-center p-3">
            {
                
                pokemon.map((valor, indice) =>                    
                    <Pokemon key={indice} thisPokemon={valor}/>
                )
               
            }
        </div>
    )
}


export default Card;