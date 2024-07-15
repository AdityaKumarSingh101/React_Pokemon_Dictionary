import { PokeAPI_Pokemon_Ability } from "../../../../types/PokeAPI_DataTypes";
import { ToPascalCase } from "../../../../helpers/functions";

export const PokemonAbilities = ({ abilities }: { abilities: [] }) => {
  return (
    <div className="m-auto border-black bg-black text-white rounded-md p-5 transition-all hover:scale-125 hover:cursor-default duration-5000 ease-in-out">
      <div className="flex flex-col">
        <h3 className="text-center text-xl">
          <b>Abilities</b>
          <hr />
          <br />
        </h3>
        <div className="flex flex-col">
          {abilities.map((ability: PokeAPI_Pokemon_Ability) => {
            return (
              <li key={ability.ability.name}>
                {ToPascalCase(ability.ability.name)}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};
