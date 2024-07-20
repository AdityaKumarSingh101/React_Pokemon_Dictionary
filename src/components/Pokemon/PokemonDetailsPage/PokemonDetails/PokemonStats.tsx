import { PokemonDetailsCardStyle } from "../../../../helpers/styles";

type PokemonStatsProps = {
  stats: {
    hp: number;
    atk: number;
    def: number;
    spAtk: number;
    spDef: number;
    speed: number;
  };
};
export default function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <div className={PokemonDetailsCardStyle}>
      {/* Stats Title */}
      <div className="font-bold text-xl text-center">BASE STATS</div>
      <hr />
      {/* Stats Table Container */}
      <div className="flex flex-row pt-5 items-center gap-2 font-bold">
        <span className="pt-1">HP: {stats.hp}</span>
        <span>|</span>
        <span className="pt-1">SPEED: {stats.speed}</span>
        <span>|</span>
        <span className="pt-1">ATK: {stats.atk}</span>
        <span>|</span>
        <span className="pt-1">DEF: {stats.def}</span>
        <span>|</span>
        <span className="pt-1">SP. ATK: {stats.spAtk}</span>
        <span>|</span>
        <span className="pt-1">SP. DEF: {stats.spDef}</span>
      </div>
    </div>
  );
}
