import { type_style } from "../../../../helpers/styles";
import { ToPascalCase } from "../../../../helpers/functions";
import { PokeAPI_Pokemon_Type } from "../../../../types/PokeAPI_DataTypes";
export const PokemonImage = ({
  exp,
  imageURL,
  types,
}: {
  exp: number;
  imageURL: string;
  types: [];
}) => {
  return (
    <div className="flex flex-col bg-white p-6 justify-center items-center size-80 border-black border-8 rounded-2xl">
      {/* Base Experience */}
      <div className="w-full text-center bg-black text-white rounded-lg mt-24 font-bold text-lg">
        Base Experience: {exp}
      </div>
      {/* Pokemon Image */}
      <div>
        <img src={imageURL} />
      </div>
      {/* Pokemon Types */}
      <div className="bg-black text-white rounded-lg font-bold p-3 mb-20 w-full">
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
    </div>
  );
};
