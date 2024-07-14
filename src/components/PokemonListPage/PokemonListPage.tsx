import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PokemonCard from "./PokemonCard/PokemonCard";
import type {
  PokeAPI_InfoPage,
  PokeAPI_Pokemon_Type,
  PokeAPI_Pokemon_Stat,
  PokeAPI_ResultPage,
} from "../../types/PokeAPI_DataTypes";
import { Pagination } from "../Pagination/Pagination";

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

export default function PokemonListPage() {
  const navigate = useNavigate();

  const [currentPageURL, setCurrentPageURL] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageURL, setNextPageURL] = useState<string>("");
  const [prevPageURL, setPrevPageURL] = useState<string>("");

  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  const fetchPokemonData = async () => {
    // Get the list of all pokemons, limit per request is 20 by default
    await axios
      .get(currentPageURL, { timeout: 5 * 1000 /* 5 sec timeout */ })
      .then((res) => {
        const responseData: PokeAPI_ResultPage = res.data;
        // Set the next and previous page URLs
        setNextPageURL(responseData.next as string);
        setPrevPageURL(responseData.previous as string);

        // Results is an array with names and urls of the fetched pokemons
        responseData.results.map(
          async (result: PokeAPI_InfoPage, index: number) => {
            let imageURL: string = "";
            let name: string = "";
            let elements: string[] = [];
            let stats: number[] = [];

            // Get the desired data for each pokemon, and store in the temp variables above
            await axios
              .get(result.url, { timeout: 2 * 100 /*0.2 sec timeout*/ })
              .then((res) => {
                let pokemonInfo = res.data;
                // Set image URL
                imageURL = pokemonInfo.sprites.front_default;
                // Set the name
                name = pokemonInfo.name;
                // Set the elements
                pokemonInfo.types.map((type: PokeAPI_Pokemon_Type) =>
                  elements.push(type.type.name)
                );
                // Set the stats
                pokemonInfo.stats.map((stat: PokeAPI_Pokemon_Stat) =>
                  stats.push(stat.base_stat)
                );
              })
              .catch((error) => {
                if (error.code === "ECONNABORTED") {
                  console.log("Connection Timed Out... :( ");
                } else {
                  console.log(error);
                }
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
          }
        );
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          console.log("Connection timed out... :(");
        } else {
          console.log(error);
        }
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
          className="bg-white flex flex-row gap-2 items-center text-black border-black border-2 hover:bg-black hover:text-white w-25 h-15 rounded-md mt-7 ml-7 p-3 font-bold"
        >
          <span className="text-2xl font-mono">&lt;</span> Home Page
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
