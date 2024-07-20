import { type_style } from "../../../../helpers/styles";
import { ToPascalCase } from "../../../../helpers/functions";
import { PokeAPI_Pokemon_Type } from "../../../../types/PokeAPI_DataTypes";

type PokemonImageProps = {
  exp: number;
  imageURL: string;
  types: [];
};
export default function PokemonImage({
  exp,
  imageURL,
  types,
}: PokemonImageProps) {
  return (
    <div className="flex flex-col bg-white justify-center size-80 border-black border-8 rounded-2xl">
      {/* Pokemon Image */}
      <div>
        <img src={imageURL} />
      </div>
      {/* Pokemon Types */}
      <div className="bg-black text-white font-bold p-3 ">
        <span className="text-center flex flex-row gap-2 justify-evenly">
          {types.map((type: PokeAPI_Pokemon_Type, index: number) => {
            const style = type_style(type.type.name);
            return (
              <span className={style} key={index}>
                <b>{ToPascalCase(type.type.name)}</b>
              </span>
            );
          })}
        </span>
      </div>
      {/* Base Experience */}
      <div className="text-center bg-black text-white rounded-b-lg font-bold text-lg mb-16 pb-2">
        Base Experience: {exp}
      </div>
    </div>
  );
}
