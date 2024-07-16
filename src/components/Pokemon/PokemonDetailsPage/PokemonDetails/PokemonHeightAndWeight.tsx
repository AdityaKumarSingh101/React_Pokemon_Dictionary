import { PokemonDetailsCardStyle } from "../../../../helpers/styles";

type PokemonHeightAndWeightProps = {
  height: number;
  weight: number;
};

export const PokemonHeightAndWeight = ({
  height,
  weight,
}: PokemonHeightAndWeightProps) => {
  return (
    <div className={PokemonDetailsCardStyle}>
      <div className="flex flex-col">
        <div>
          <h3 className="text-center text-xl">
            <b>HEIGHT</b>
            <hr />
          </h3>
          <div className="text-center font-bold text-xl mt-2">
            {height / 10} m
          </div>
        </div>
        <br />
        <div>
          <h3 className="text-center text-xl">
            <b>WEIGHT</b>
            <hr />
          </h3>
          <div className="text-center font-bold text-xl mt-2">
            {weight / 10} kg
          </div>
        </div>
      </div>
    </div>
  );
};
