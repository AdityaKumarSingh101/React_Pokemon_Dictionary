import { useNavigate } from "react-router-dom";
import { ToPascalCase } from "../../../../helpers/functions";
import { type_style } from "../../../../helpers/styles";

type PokemonStats = {
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  speed: number;
};

type PokemonCardProps = {
  imageURL: string;
  name: string;
  elements: string[];
  stats: PokemonStats;
};

export default function PokemonListPageCard({
  imageURL,
  name,
  elements,
  stats,
}: PokemonCardProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* Card Container */}
      <div className="border-black border-8 rounded-md overflow-auto">
        {/* Pokemon Images Container */}
        <div className="flex flex-row justify-center bg-white">
          <img src={imageURL}></img>
        </div>
        {/* Name Container */}
        <div className="bg-black p-3 w-full text-white text-center">
          <span className="">
            <b>{ToPascalCase(name)}</b>
          </span>
        </div>
        {/* Type Container */}
        <div className="w-full bg-gray-500 flex flex-row justify-center py-1">
          <span className="text-center flex flex-row gap-2">
            {elements.map((element, index: number) => {
              const style = type_style(element);
              return (
                <span className={style} key={index}>
                  <b>{ToPascalCase(element)}</b>
                </span>
              );
            })}
          </span>
          &nbsp;&nbsp;
        </div>
        {/* Stats Title */}
        <div className="w-full text-center">
          <div className="bg-gray-300 font-bold">Base Stats</div>
        </div>
        {/* Stats Container */}
        <div className="grid grid-cols-2 bg-white text-center pr-2 gap-2 py-1">
          <div className="col-span-1">
            <div className="grid grid-rows-3">
              <div className="grid grid-cols-2">
                <div className="text-start pl-3">HP</div>
                <div>{stats.hp}</div>
              </div>
              <div className="grid grid-cols-2 ">
                <div className="text-start pl-3">Atk</div>
                <div>{stats.atk}</div>
              </div>
              <div className="grid grid-cols-2 ">
                <div className="text-start pl-3">Sp. Atk</div>
                <div>{stats.spAtk}</div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-rows-3">
              <div className="grid grid-cols-2">
                <div className="text-start">Speed</div>
                <div>{stats.speed}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-start">Def</div>
                <div>{stats.def}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-start">Sp. Def</div>
                <div>{stats.spDef}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Link to Pokemon Details */}
        <div className="bg-black text-white text-center font-bold py-2 hover:cursor-pointer">
          <span onClick={() => navigate(`/pokemon/${name}`)}>
            See More &gt;
          </span>
        </div>
      </div>
    </>
  );
}
