import React, {useEffect, useState} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

function App() {
  const [PokemonList, setPokemonList] = useState([]);
  const [PokemonName, setPokemonName] = useState("");
  
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        console.log(res.data.results)
        setPokemonList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])


  const changePokeName = (event) => {
    setPokemonName(event.target.value);
  };

    return (
      <div className="App">
    
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
        
          {PokemonList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
  
        {PokemonName && <PokeCard pokemon={PokemonName} />}
      </div>
    );
  
};

export default App;
