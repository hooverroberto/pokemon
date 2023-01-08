import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = ({ thisPokemon }) => {
  const [onePokemon, setOnePokemon] = useState({
    name: "",
    sprites: {
      front_default: "",
    },
  });

  const getPokemon = (url) => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response);
        setOnePokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemon(thisPokemon.url);
  }, [thisPokemon.url]);

  return (
   
    <div className="card m-1 s" style={{ width: 180 }}>
      <img src={onePokemon.sprites.front_default} alt="" />
      <div class="card-body">
        <h5 class="card-title">{onePokemon.name}</h5>       
      </div>
    </div>
   
  );
};

export default Pokemon;
