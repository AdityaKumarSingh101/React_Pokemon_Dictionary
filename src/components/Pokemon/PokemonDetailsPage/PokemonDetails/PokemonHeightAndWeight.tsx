import { PokemonDetailsCardStyle } from "../../../../helpers/styles";

type PokemonHeightAndWeightProps = {
  height: number;
  weight: number;
};

export default function PokemonHeightAndWeight({
  height,
  weight,
}: PokemonHeightAndWeightProps) {
  return (
    <div className={PokemonDetailsCardStyle}>
      <div className="flex flex-col">
        <span>
          <h3 className="text-center text-xl">
            <b>HEIGHT</b>
            <hr />
          </h3>
          <div className="text-center font-bold text-lg mt-1">
            {height / 10} m
          </div>
        </span>
        <br />
        <span>
          <h3 className="text-center text-xl">
            <b>WEIGHT</b>
            <hr />
          </h3>
          <div className="text-center font-bold text-lg mt-2">
            {weight / 10} kg
          </div>
        </span>
      </div>
    </div>
  );
}
