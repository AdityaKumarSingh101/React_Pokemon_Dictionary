import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { PokeAPI_ItemData } from "../../../../types/PokeAPI_DataTypes";
import ListPageCard from "../../../../atoms/ListPageCard";

type ItemCardProps = {
  name: string;
};

export default function ItemsListPageCard({ name }: ItemCardProps) {
  const navigate = useNavigate();

  const [itemData, setItemData] = useState<PokeAPI_ItemData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchItemList = async () => {
    await axios.get(`https://pokeapi.co/api/v2/item/${name}`).then((res) => {
      const item: PokeAPI_ItemData = res.data;
      setItemData(item);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchItemList();
  }, []);
  if (isLoading) {
    return (
      <div className="border-black border-8 rounded-md overflow-auto hover:scale-110 hover:cursor-pointer duration-500 ease-in-out hover:border-white hover:border-4">
        Loading...
      </div>
    );
  }
  return (
    <>
      <ListPageCard
        name={name}
        imageURL={itemData?.sprites.default as string}
        onClickNavigate={() => navigate(`/item/${name}`)}
      />
    </>
  );
}
