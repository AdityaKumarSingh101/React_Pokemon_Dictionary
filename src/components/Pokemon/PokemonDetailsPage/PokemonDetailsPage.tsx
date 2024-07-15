import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToPascalCase } from "../../../helpers/functions";
import { useNavigate } from "react-router-dom";
import { PokeAPI_PokemonData } from "../../../types/PokeAPI_DataTypes";
import { PokemonDetailsPageButton } from "../../../atoms/Buttons";
import { PokemonImage } from "./PokemonDetails/PokemonImage";
import { PokemonAbilities } from "./PokemonDetails/PokemonAbilities";
import { PokemonForms } from "./PokemonDetails/PokemonForms";

export const PokemonPage = () => {
  const navigate = useNavigate();
  const { pokemonName } = useParams();

  const [pokemonData, setPokemonData] = useState<PokeAPI_PokemonData>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pokemonDataURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const fetchPokemonData = async () => {
    await axios.get(pokemonDataURL).then((res) => {
      const data: PokeAPI_PokemonData = res.data;
      setPokemonData(data);
      setIsLoading(false);
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
        <div className="flex flex-row justify-start items-center gap-5">
          {/* Pokemon Image */}
          <div className="mt-5 ml-5">
            <PokemonImage
              imageURL={pokemonData?.sprites.other.home.front_default as string}
              exp={pokemonData?.base_experience as number}
            />
          </div>
          {/* Pokemon Abilities */}
          <span>
            <PokemonAbilities abilities={pokemonData?.abilities as []} />
          </span>
          <span>{/* <PokemonForms forms={pokemonData?.forms as []} /> */}</span>
        </div>
      </div>
    </>
  );
};
