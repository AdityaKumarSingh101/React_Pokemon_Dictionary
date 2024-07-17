import { PokemonDetailsCardStyle } from "../../../../helpers/styles";

export const PokemonCries = ({
  latest,
  legacy,
}: {
  latest: string;
  legacy: string;
}) => {
  return (
    <div className={PokemonDetailsCardStyle}>
      <div className="flex flex-col">
        <span className="text-center text-2xl font-bold">CRIES</span>
        <hr />
        {/* Latest and Legacy */}
        <div className="flex flex-col justify-center items-center">
          {/* Latest */}
          <div className="mt-5 flex flex-row items-center gap-5">
            <span className="font-bold text-lg">Latest</span>
            <audio controls>
              <source src={latest} type="audio/ogg" />
            </audio>
          </div>
          {/* Legacy */}
          <div className="mt-5 flex flex-row items-center gap-5">
            <span className="text-lg font-bold">Legacy</span>
            <span>
              <audio controls>
                <source src={legacy} type="audio/ogg" />
              </audio>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
