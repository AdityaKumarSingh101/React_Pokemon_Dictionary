type PokemonHeightAndWeightProps = {
  height: number;
  weight: number;
};

export const PokemonHeightAndWeight = ({
  height,
  weight,
}: PokemonHeightAndWeightProps) => {
  return (
    <div className="m-auto border-black bg-black text-white rounded-md p-5 transition-all hover:scale-125 hover:cursor-default duration-5000 ease-in-out">
      <div className="flex flex-col">
        <div>
          <h3 className="text-center text-xl">
            <b>Height</b>
            <hr />
          </h3>
          <div className="text-center font-bold text-xl mt-2">{height}</div>
        </div>

        <div>
          <h3 className="text-center text-xl">
            <b>Weight</b>
            <hr />
          </h3>
          <div className="text-center font-bold text-xl mt-2">{weight}</div>
        </div>
      </div>
    </div>
  );
};
