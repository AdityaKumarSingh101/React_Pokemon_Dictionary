import axios from "axios";
import type { PokeAPI_ResultPage } from "../../types/PokeAPI_DataTypes";

export const fetchPokemonList = async (
  currentPageURL: string,
  setNextPageURL: (url: string) => void,
  setPrevPageURL: (url: string) => void,
  setPokemonCount: (count: number) => void,
  setPokemonList: ([]: string[]) => void
) => {
  // Get the list of all pokemons, limit per request is 20 by default
  await axios
    .get(currentPageURL, { timeout: 5 * 1000 /* 5 sec timeout */ })
    .then(async (res) => {
      const resultPage: PokeAPI_ResultPage = res.data;

      setPokemonCount(resultPage.count);
      setNextPageURL(resultPage.next);
      setPrevPageURL(resultPage.previous);
      const nameList: string[] = [];
      resultPage.results.map((result) => {
        nameList.push(result.name);
      });
      setPokemonList(nameList);
    })
    .catch((error) => {
      if (error.code === "ECONNABORTED") {
        console.log("Connection timed out... :(");
      } else {
        console.log(error);
      }
    });
};
