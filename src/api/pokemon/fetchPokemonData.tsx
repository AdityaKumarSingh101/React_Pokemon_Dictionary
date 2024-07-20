import axios from "axios";
import type { PokeAPI_PokemonData } from "../../types/PokeAPI_DataTypes";

export const fetchPokemonData = async (
  name: string,
  setPokemonData: (pokemonData: PokeAPI_PokemonData) => void
) => {
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
    const pokemon: PokeAPI_PokemonData = res.data;
    setPokemonData(pokemon);
  });
};
