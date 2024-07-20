import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchItemsList } from "../../../api/items/fetchItemList";

import { BackToHomePageButton } from "../../../atoms/Buttons";
import ListPagePagination from "../../Pagination/ListPagePagination";
import ItemsListPageCard from "./ItemsListPageCard/ItemsListPageCard";

export default function ItemsListPage() {
  const navigate = useNavigate();
  const [itemsList, setItemsList] = useState<string[]>([]);
  const [itemsCount, setItemsCount] = useState<number>(0);
  const [itemsPerPage] = useState(20);

  const [currentPageURL, setCurrentPageURL] = useState<string>(
    "https://pokeapi.co/api/v2/item"
  );
  const [nextPageURL, setNextPageURL] = useState<string>("");
  const [previousPageURL, setPreviousPageURL] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchItemsList(
      currentPageURL,
      setNextPageURL,
      setPreviousPageURL,
      setItemsCount,
      setItemsList
    );
    setIsLoading(false);
  }, [currentPageURL]);

  if (isLoading)
    return (
      <div className="text-center text-white font-bold text-2xl w-full h-full align-middle">
        Loading...
      </div>
    );
  return (
    <>
      <div>
        <BackToHomePageButton text="Home" onClick={() => navigate("/")} />
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-5 p-5">
        {itemsList.map((name) => {
          return (
            <div className="col-span-1" key={name}>
              <ItemsListPageCard name={name} />
            </div>
          );
        })}
      </div>

      <div className="my-2 text-center">
        <ListPagePagination
          dataItem="item"
          itemCount={itemsCount}
          itemsPerPage={itemsPerPage}
          previousPageURL={previousPageURL}
          nextPageURL={nextPageURL}
          gotoPreviousPage={() => setCurrentPageURL(previousPageURL)}
          gotoPageNumber={setCurrentPageURL}
          gotoNextPage={() => setCurrentPageURL(nextPageURL)}
        />
      </div>
    </>
  );
}
