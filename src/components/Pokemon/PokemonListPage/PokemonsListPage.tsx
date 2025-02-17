import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PokemonListPageCard from "./PokemonListPageCard/PokemonListPageCard";
import { fetchPokemonList } from "../../../api/pokemon/fetchPokemonList";
import { BackToHomePageButton } from "../../../atoms/Buttons";
import ListPagePagination from "../../Pagination/ListPagePagination";

export default function PokemonListPage() {
  const navigate = useNavigate();

  const [currentPageURL, setCurrentPageURL] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageURL, setNextPageURL] = useState<string>("");
  const [prevPageURL, setPrevPageURL] = useState<string>("");

  const [pokemonCount, setPokemonCount] = useState<number>(0);
  const [pokemonPerPage] = useState<number>(20);

  const [pokemonList, setPokemonList] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPokemonList(
      currentPageURL,
      setNextPageURL,
      setPrevPageURL,
      setPokemonCount,
      setPokemonList
    );
    setIsLoading(false);
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
        <BackToHomePageButton text="Home" onClick={() => navigate("/")} />
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-5 p-5">
        {pokemonList.map((name) => {
          return (
            <div className="col-span-1" key={name}>
              <PokemonListPageCard name={name} />
            </div>
          );
        })}
      </div>

      <div className="mt-5 text-center">
        <ListPagePagination
          dataItem="pokemon"
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
