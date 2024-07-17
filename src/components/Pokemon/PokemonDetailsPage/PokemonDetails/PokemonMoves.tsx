import { PokemonDetailsCardStyle } from "../../../../helpers/styles";
import { PokeAPI_Pokemon_Move } from "../../../../types/PokeAPI_DataTypes";

export const PokemonMoves = ({ moves }: { moves: [] }) => {
  return (
    <div className={PokemonDetailsCardStyle}>
      <div className="flex flex-col">
        <span className="font-bold text-center text-xl">MOVES</span>
        <hr />
        <div className="flex flex-row gap-3 font-bold">
          <div className="mt-3">
            {moves.slice(0, 5).map((move: PokeAPI_Pokemon_Move) => {
              return (
                <li key={move.move.name}>
                  {move.move.name.charAt(0).toUpperCase() +
                    "" +
                    move.move.name.slice(1)}
                </li>
              );
            })}
          </div>
          <div className="mt-3">
            {moves.slice(5, 10).map((move: PokeAPI_Pokemon_Move) => {
              return (
                <li key={move.move.name}>
                  {move.move.name.charAt(0).toUpperCase() +
                    "" +
                    move.move.name.slice(1)}
                </li>
              );
            })}
          </div>
          <div className="mt-3">
            {moves.slice(10, 15).map((move: PokeAPI_Pokemon_Move) => {
              return (
                <li key={move.move.name}>
                  {move.move.name.charAt(0).toUpperCase() +
                    "" +
                    move.move.name.slice(1)}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
