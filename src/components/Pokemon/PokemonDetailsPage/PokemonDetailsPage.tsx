import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToPascalCase } from "../../../helpers/functions";
import { useNavigate } from "react-router-dom";
import { PokeAPI_PokemonData } from "../../../types/PokeAPI_DataTypes";
import { PokemonDetailsPageButton } from "../../../atoms/Buttons";
import { PokemonImage } from "./PokemonDetails/PokemonImage";
import { PokemonAbilities } from "./PokemonDetails/PokemonAbilities";
import { PokemonHeightAndWeight } from "./PokemonDetails/PokemonHeightAndWeight";
import { PokemonStats } from "./PokemonDetails/PokemonStats";

export const PokemonPage = () => {
  const navigate = useNavigate();
  const { pokemonName } = useParams();

  const [pokemonData, setPokemonData] = useState<PokeAPI_PokemonData>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pokemonDataURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const fetchPokemonData = async () => {
    await axios.get(pokemonDataURL).then(async (res) => {
      const data: PokeAPI_PokemonData = await res.data;
      setPokemonData(data);
      setIsLoading(false);
      console.log(data);
    });
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  if (isLoading)
    return (
      <div className="text-center text-white font-bold text-2xl w-full h-full align-middle">
        Loading...
      </div>
    );
  return (
    <>
      {/* Page Container */}
      <div className="flex flex-col">
        {/* Page Heading Bar*/}
        <div className="flex flex-row bg-black text-white py-3 justify-start items-center">
          {/* Back To Pokemon List Button */}
          <PokemonDetailsPageButton
            type="Back"
            onClick={() => navigate("/pokemon")}
          />
          {/* Pokemon Name */}
          <div className="text-center font-bold text-3xl w-full">
            {ToPascalCase(pokemonData?.name as string)}
          </div>
        </div>
        {/* Rest of the page */}
        <div className="flex flex-col justify-start items-start gap-5 mt-10 ml-10">
          <div className="flex flex-row justify-start items-start gap-5 m-5">
            {/* Pokemon Image */}
            <span>
              <PokemonImage
                exp={pokemonData?.base_experience as number}
                imageURL={
                  pokemonData?.sprites.other.home.front_default as string
                }
                types={pokemonData?.types as []}
              />
            </span>
            {/* Pokemon Abilities */}
            <span className="ml-5">
              <PokemonAbilities abilities={pokemonData?.abilities as []} />
            </span>
            {/* Pokemon Forms */}
            <span></span>
            {/* Pokemon Height and Weight */}
            <span>
              <PokemonHeightAndWeight
                height={pokemonData?.height as number}
                weight={pokemonData?.weight as number}
              />
            </span>
            {/* Pokemon Stats */}
            <span className="ml-5">
              <PokemonStats
                stats={{
                  hp: pokemonData?.stats[0].base_stat as number,
                  atk: pokemonData?.stats[1].base_stat as number,
                  def: pokemonData?.stats[2].base_stat as number,
                  spAtk: pokemonData?.stats[3].base_stat as number,
                  spDef: pokemonData?.stats[4].base_stat as number,
                  speed: pokemonData?.stats[5].base_stat as number,
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
