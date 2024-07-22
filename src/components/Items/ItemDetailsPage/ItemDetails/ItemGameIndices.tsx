import { PokeAPI_Item_GameIndex } from "../../../../types/PokeAPI_DataTypes";

type ItemGameIndicesProps = {
  game_indices: [];
};
export default function ItemGameIndices({
  game_indices,
}: ItemGameIndicesProps) {
  return (
    <>
      <div className="flex flex-col text-white bg-black p-2">
        <span className="font-bold text-xl text-center">Game Indices</span>
        <hr className="mb-2" />
        <div className="flex flex-row gap-2">
          <div className="flex flex-col">
            {game_indices.map((game_index: PokeAPI_Item_GameIndex, index) => {
              return (
                <li key={index}>
                  {game_index.generation.name?.charAt(0).toUpperCase() +
                    "" +
                    game_index.generation.name?.slice(1).split("-")[0] +
                    " " +
                    game_index.generation.name
                      ?.slice(1)
                      .split("-")[1]
                      .toUpperCase()}
                </li>
              );
            })}
          </div>
          <div className="flex flex-col">
            {game_indices.map((game_index: PokeAPI_Item_GameIndex, index) => {
              return <span key={index}>: {game_index.game_index}</span>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
