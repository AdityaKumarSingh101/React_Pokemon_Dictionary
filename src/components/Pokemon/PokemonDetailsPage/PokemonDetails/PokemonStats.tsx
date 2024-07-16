import { PokemonDetailsCardStyle } from "../../../../helpers/styles";

export const PokemonStats = ({
  stats,
}: {
  stats: {
    hp: number;
    atk: number;
    def: number;
    spAtk: number;
    spDef: number;
    speed: number;
  };
}) => {
  return (
    <div className={PokemonDetailsCardStyle}>
      {/* Stats Title */}
      <div className="font-bold text-xl text-center">STATS</div>
      <hr />
      {/* Stats Table Container */}
      <div className="flex flex-col gap-2 mt-4 font-bold">
        <div className=" flex flex-row gap-6">
          <span className="mr-2">
            HP : <span className="ml-2">{stats.hp}</span>
          </span>
          <span className="ml-2">
            SPEED : <span className="ml-2">{stats.speed}</span>
          </span>
        </div>
        <div className=" flex flex-row gap-4">
          <span className="mr-2">
            ATK : <span className="ml-2">{stats.atk}</span>
          </span>
          <span className="ml-2">
            SP. ATK : <span className="ml-2">{stats.spAtk}</span>
          </span>
        </div>
        <div className="flex flex-row gap-4">
          <span className="mr-2">
            DEF : <span className="ml-2">{stats.def}</span>
          </span>
          <span className="ml-2">
            SP. DEF : <span className="ml-2">{stats.spDef}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
