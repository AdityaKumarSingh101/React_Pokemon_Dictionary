import { useNavigate } from "react-router-dom";
import { ToPascalCase } from "../../../../helpers/functions";
import { type_style } from "../../../../helpers/styles";

type PokemonCardProps = {
  imageURL: string;
  name: string;
};

export default function PokemonListPageCard({
  imageURL,
  name,
}: PokemonCardProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* Card Container */}
      <div className="border-black border-8 rounded-md overflow-auto hover:scale-110 hover:cursor-pointer duration-500 ease-in-out">
        {/* Name Container */}
        <div className="bg-black p-3 w-full text-white text-center">
          <span className="">
            <b>{ToPascalCase(name)}</b>
          </span>
        </div>
        {/* Pokemon Image Container */}
        <div className="flex flex-row justify-center bg-white">
          <img src={imageURL}></img>
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
