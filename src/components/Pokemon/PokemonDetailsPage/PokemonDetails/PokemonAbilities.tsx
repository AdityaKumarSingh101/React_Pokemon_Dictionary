import { PokeAPI_Pokemon_Ability } from "../../../../types/PokeAPI_DataTypes";
import { ToPascalCase } from "../../../../helpers/functions";
import { PokemonDetailsCardStyle } from "../../../../helpers/styles";

export const PokemonAbilities = ({ abilities }: { abilities: [] }) => {
  return (
    <div className={PokemonDetailsCardStyle}>
      <div className="flex flex-col">
        <h3 className="text-center text-xl">
          <b>ABILITIES</b>
          <hr />
        </h3>
        <div className="flex flex-col mt-2">
          {abilities.map((ability: PokeAPI_Pokemon_Ability) => {
            return (
              <span key={ability.ability.name}>
                <b>{ToPascalCase(ability.ability.name)}</b>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
