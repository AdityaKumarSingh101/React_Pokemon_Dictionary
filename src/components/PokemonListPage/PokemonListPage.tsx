import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import PokemonCard from "./PokemonCard/PokemonCard";
import { Pagination } from "../Pagination/Pagination";

//#region PokeApi Data Types
type PokeAPI_UrlName = {
  url: string;
  name: string;
};
type PokeAPI_PokemonType = {
  slot: number;
  type: PokeAPI_UrlName;
};
type PokeAPI_PokemonStat = {
  base_stat: number;
  effort: number;
  stat: PokeAPI_UrlName;
};
//#endregion

//#region State Data Types
type PokemonData = {
  imageURL: string;
  name: string;
  elements: string[];
  stats: {
    hp: number;
    atk: number;
    def: number;
    spAtk: number;
    spDef: number;
    speed: number;
  };
};

//#endregion

export default function PokemonListPage() {
  const navigate = useNavigate();
  const [currentPageURL, setCurrentPageURL] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageURL, setNextPageURL] = useState<string>("");
  const [prevPageURL, setPrevPageURL] = useState<string>("");

  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  const fetchPokemonData = async () => {
    // Get the list of all pokemons
    await axios.get(currentPageURL).then((res) => {
      // Set the next and previous page URLs
      setNextPageURL(res.data.next);
      setPrevPageURL(res.data.previous);

      // Results is an array with names and urls of the fetched pokemons
      res.data.results.map(async (result: PokeAPI_UrlName, index: number) => {
        let imageURL: string = "";
        let name: string = "";
        let elements: string[] = [];
        let stats: number[] = [];

        // Get the desired data for each pokemon, and store in the temp variables above
        await axios.get(result.url).then((res) => {
          let pokemonInfo = res.data;
          console.log(pokemonInfo);
          // Set image URL
          imageURL = pokemonInfo.sprites.front_default;
          // Set the name
          name = pokemonInfo.name;
          // Set the elements
          pokemonInfo.types.map((type: PokeAPI_PokemonType) =>
            elements.push(type.type.name)
          );
          // Set the stats
          pokemonInfo.stats.map((stat: PokeAPI_PokemonStat) =>
            stats.push(stat.base_stat)
          );
        });

        // Temp pokemon data variable
        const pokemon = {
          imageURL: imageURL,
          name: name,
          elements: elements,
          stats: {
            hp: stats[0],
            atk: stats[1],
            def: stats[2],
            spAtk: stats[3],
            spDef: stats[4],
            speed: stats[5],
          },
        };

        // Set the list of pokemons
        setPokemonList([...pokemonList, (pokemonList[index] = pokemon)]);
      });
    });
  };

  const goToNextPage = () => {
    setCurrentPageURL(nextPageURL);
  };

  const goToPrevPage = () => {
    setCurrentPageURL(prevPageURL);
  };

  useEffect(() => {
    fetchPokemonData();
  }, [currentPageURL]);

  return (
    <>
      <div>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-black border-black border-2 hover:bg-black hover:text-white w-25 h-15 rounded-md mt-7 ml-7 p-3 font-bold"
        >
          Home Page
        </button>
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-5 p-5">
        {pokemonList.map((pokemon) => {
          return (
            <div className="col-span-1" key={pokemon.name}>
              <PokemonCard
                imageURL={pokemon.imageURL}
                name={pokemon.name}
                elements={pokemon.elements}
                stats={pokemon.stats}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center py-2">
        <Pagination
          gotoNextPage={goToNextPage}
          gotoPrevPage={goToPrevPage}
          prevPage={prevPageURL}
          nextPage={nextPageURL}
        />
      </div>
    </>
  );
}
