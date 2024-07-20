import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PokemonListPageCard from "./PokemonListPageCard/PokemonListPageCard";
import type {
  PokeAPI_InfoPage,
  PokeAPI_ResultPage,
  PokeAPI_PokemonData,
} from "../../../types/PokeAPI_DataTypes";
import { PokemonListPageButton } from "../../../atoms/Buttons";
import PokemonListPagination from "../../Pagination/PokemonListPagination";

type PokemonData = {
  imageURL: string;
  name: string;
};
export default function PokemonListPage() {
  const navigate = useNavigate();

  const [currentPageURL, setCurrentPageURL] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageURL, setNextPageURL] = useState<string>("");
  const [prevPageURL, setPrevPageURL] = useState<string>("");

  const [pokemonCount, setPokemonCount] = useState<number>(0);
  const [pokemonPerPage] = useState<number>(20);

  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPokemonData = async () => {
    // Get the list of all pokemons, limit per request is 20 by default
    await axios
      .get(currentPageURL, { timeout: 5 * 1000 /* 5 sec timeout */ })
      .then(async (res) => {
        const responseData: PokeAPI_ResultPage = res.data;
        // Set the next and previous page URLs
        setNextPageURL(responseData.next as string);
        setPrevPageURL(responseData.previous as string);
        setPokemonCount(responseData.count);

        // Results is an array with names and urls of the fetched pokemons
        responseData.results.map(
          async (result: PokeAPI_InfoPage, index: number) => {
            let imageURL: string = "";
            let name: string = "";

            // Get the desired data for each pokemon, and store in the temp variables above
            await axios
              .get(result.url, { timeout: 2 * 1000 /*0.2 sec timeout*/ })
              .then((res) => {
                let pokemonInfo: PokeAPI_PokemonData = res.data;

                // Set image URL
                imageURL = pokemonInfo.sprites!.front_default as string;
                // Set the name
                name = pokemonInfo!.name as string;
              })
              .catch((error) => {
                if (error.code === "ECONNABORTED") {
                  console.log("Connection Timed Out... :( ");
                } else {
                  console.log(error);
                }
              });

            // Temp pokemon data variabl
            const pokemon = {
              imageURL: imageURL,
              name: name,
            };

            // Set the list of pokemons
            setPokemonList([...pokemonList, (pokemonList[index] = pokemon)]);
            setIsLoading(false);
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

  useEffect(() => {
    fetchPokemonData();
  }, [currentPageURL]);

  if (isLoading)
    return (
      <div className="text-center text-white font-bold text-2xl w-full h-full align-middle">
        Loading...
      </div>
    );
  return (
    <>
      <div>
        <PokemonListPageButton text="Home" onClick={() => navigate("/")} />
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-5 p-5">
        {pokemonList.map((pokemon) => {
          return (
            <div className="col-span-1" key={pokemon.name}>
              <PokemonListPageCard
                imageURL={pokemon.imageURL}
                name={pokemon!.name}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-5 text-center">
        <PokemonListPagination
          itemCount={pokemonCount}
          itemsPerPage={pokemonPerPage}
          previousPageURL={prevPageURL}
          nextPageURL={nextPageURL}
          gotoPreviousPage={() => setCurrentPageURL(prevPageURL)}
          gotoPageNumber={setCurrentPageURL}
          gotoNextPage={() => setCurrentPageURL(nextPageURL)}
        />
      </div>
    </>
  );
}
