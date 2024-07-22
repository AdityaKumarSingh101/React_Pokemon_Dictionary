import { PokeAPI_Item_Effect } from "../../../../types/PokeAPI_DataTypes";

type ItemEffectProps = {
  effects: [];
};
export default function ItemEffect({ effects }: ItemEffectProps) {
  return (
    <>
      <div className="bg-black rounded-md p-5 text-white">
        {effects.map((effect: PokeAPI_Item_Effect, index) => {
          return (
            <span key={index}>
              <li>
                <b className="text-xl">Effect</b> <br />
                <i>{effect.effect}</i>
              </li>
              <hr className="my-2" />
              <li>
                <b className="text-xl">Short Effect</b>
                <br /> <i>{effect.short_effect}</i>
              </li>
            </span>
          );
        })}
      </div>
    </>
  );
}
