import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PokeAPI_PokemonData } from "../../../../types/PokeAPI_DataTypes";
import { fetchPokemonData } from "../../../../api/pokemon/fetchPokemonData";
import ListPageCard from "../../../../atoms/ListPageCard";

type PokemonCardProps = {
  name: string;
};

export default function PokemonListPageCard({ name }: PokemonCardProps) {
  const navigate = useNavigate();

  const [pokemonData, setPokemonData] = useState<PokeAPI_PokemonData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPokemonData(name, setPokemonData);
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <div className="border-black border-8 rounded-md overflow-auto hover:scale-110 hover:cursor-pointer duration-500 ease-in-out hover:border-white hover:border-4">
        Loading...
      </div>
    );
  }
  return (
    <>
      <ListPageCard
        name={name}
        imageURL={pokemonData?.sprites.front_default as string}
        onClickNavigate={() => navigate(`/pokemon/${name}`)}
      />
    </>
  );
}
