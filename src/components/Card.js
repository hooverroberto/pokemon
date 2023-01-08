import React from "react";
import Pokemon from './Pokemon'


const Card = ({pokemon}) => {

    return(
        <div>
            {
                pokemon.map((valor, index) => 
                    <Pokemon  key={index} thisPokemon={valor} />
                )
            }
        </div>
    )
}


export default Card;