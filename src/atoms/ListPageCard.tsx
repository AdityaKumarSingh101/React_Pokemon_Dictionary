import { ToPascalCase } from "../helpers/functions";
type ListPageCardProps = {
  onClickNavigate: () => void;
  name: string;
  imageURL: string;
};

export default function ListPageCard({
  onClickNavigate,
  name,
  imageURL,
}: ListPageCardProps) {
  return (
    <>
      {/* Card Container */}
      <div
        onClick={onClickNavigate}
        className="border-black border-8 rounded-md overflow-auto hover:scale-110 hover:cursor-pointer duration-500 ease-in-out hover:border-white hover:border-4"
      >
        {/* Name Container */}
        <div className="bg-black p-3 w-full text-white text-center">
          <span className="">
            <b>{ToPascalCase(name)}</b>
          </span>
        </div>
        {/* Image Container */}
        <div className="flex flex-row justify-center bg-white">
          <img
            height={100}
            width={100}
            src={imageURL ? imageURL : "/Poké_Ball_favicon.png"}
          ></img>
        </div>
      </div>
    </>
  );
}
