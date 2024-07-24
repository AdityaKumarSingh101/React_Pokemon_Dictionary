import axios from "axios";
import type { PokeAPI_PokemonData } from "../../types/PokeAPI_DataTypes";

export const fetchPokemonData = async (
  pokemonName: string,
  setPokemonData: (pokemonData: PokeAPI_PokemonData) => void
) => {
  
  const pokemonDataURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
  await axios.get(pokemonDataURL).then((res) => {
    const pokemon: PokeAPI_PokemonData = res.data;
    setPokemonData(pokemon);
  });

};
