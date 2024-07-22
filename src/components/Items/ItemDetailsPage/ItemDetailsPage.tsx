import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PokeAPI_ItemData } from "../../../types/PokeAPI_DataTypes";

import { BackToItemListButton } from "../../../atoms/Buttons";

export default function ItemDetailsPage() {
  const navigate = useNavigate();

  const { itemName } = useParams();

  const [itemData, setItemData] = useState<PokeAPI_ItemData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pokemonDataURL = `https://pokeapi.co/api/v2/item/${itemName}`;

  const fetchItemData = async () => {
    await axios.get(pokemonDataURL).then((res) => {
      console.log(res.data);
      const responseData: PokeAPI_ItemData = res.data;
      setItemData(responseData);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchItemData();
  }, []);

  if (isLoading)
    return (
      <div className="text-center text-white font-bold text-2xl w-full h-full align-middle">
        Loading...
      </div>
    );

  return (
    <>
      {/* Page Container */}
      <div className="flex flex-col">
        {/* Page Heading Bar*/}
        <div className="flex flex-row bg-black text-white py-3 justify-start items-center mb-5">
          {/* Back To Item List Button */}
          <span className="ml-5">
            <BackToItemListButton
              text="Back"
              onClick={() => navigate("/item")}
            />
          </span>
          {/* Item Name */}
          <div className="text-center font-bold text-3xl w-full">
            {itemData?.name.charAt(0).toUpperCase() +
              "" +
              itemData?.name.slice(1)}
          </div>
        </div>
        {/* Rest of the page */}
        <div className="flex flex-col p-2 gap-2">
          {/* Item Image Row */}
          <div className="flex flex-row gap-2">
            {/* Image and Category */}
            <div className="flex flex-col">
              <div className="bg-white border-black border-2 rounded-t-lg">
                <img src={itemData?.sprites.default} width={275} height={275} />
              </div>
              <div className="bg-black text-white text-center text-lg font-bold p-2 rounded-b-lg">
                Category:{" "}
              </div>
            </div>
            {/* Fling Power and Cost */}
            <div className="bg-black text-white text-center font-bold flex flex-col justify-around p-2">
              <div className="flex flex-col">
                <span className="text-2xl">Cost</span>
                <hr className="mb-3" />
                {itemData?.cost !== null ? itemData?.cost : "N/A"}
              </div>
              <div>
                <span className="text-2xl">Fling Power</span>
                <hr className="mb-3" />
                {itemData?.fling_power !== null ? itemData?.fling_power : "N/A"}
              </div>
            </div>
            {/* Effect and Short Effect */}
            <div className="bg-black rounded-md p-5 text-white">
              {itemData?.effect_entries.map((entry, index) => {
                return (
                  <span key={index}>
                    <li>
                      <b className="text-xl">Effect</b> <br />
                      <i>{entry.effect}</i>
                    </li>
                    <hr className="my-2" />
                    <li>
                      <b className="text-xl">Short Effect</b>
                      <br /> <i>{entry.short_effect}</i>
                    </li>
                  </span>
                );
              })}
            </div>
          </div>
          {/* */}
          <div className="flex flex-row">
            {/* Game Indices */}
            <div className="flex flex-col text-white bg-black p-2 rounded-md">
              <span className="font-bold text-xl text-center">
                Game Indices
              </span>
              <hr className="mb-2" />
              <div className="flex flex-row gap-2">
                <div className="flex flex-col">
                  {itemData?.game_indices.map((game_index, index) => {
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
                  {itemData?.game_indices.map((game_index, index) => {
                    return <span key={index}>: {game_index.game_index}</span>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
