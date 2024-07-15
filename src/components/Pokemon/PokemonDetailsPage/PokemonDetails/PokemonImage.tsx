export const PokemonImage = ({
  imageURL,
  exp,
}: {
  imageURL: string;
  exp: number;
}) => {
  return (
    <div className="flex flex-col bg-white p-6 justify-center items-center size-80 border-black border-2 rounded-lg">
      <img src={imageURL} />
      <div className="bg-black text-white text-center rounded-t-md font-bold p-2 mt-2">
        Base Experience: {exp}
      </div>
    </div>
  );
};
