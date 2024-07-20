import { useState } from "react";

type PokemonListPaginationProps = {
  itemCount: number;
  itemsPerPage: number;
  gotoNextPage: () => void;
  gotoPageNumber: (url: string) => void;
  gotoPreviousPage: () => void;
  previousPageURL: string;
  nextPageURL: string;
  dataItem: string;
};
export default function ListPagePagination({
  dataItem,
  itemCount,
  itemsPerPage,
  previousPageURL,
  nextPageURL,
  gotoNextPage,
  gotoPageNumber,
  gotoPreviousPage,
}: PokemonListPaginationProps) {
  const pageNumbers: number[] = [];
  for (let i = 0; i < Math.ceil(itemCount / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [activePageNumber, setActivePageNumber] = useState<number>(0);
  const [sideLength] = useState<number>(2);

  return (
    <>
      {/* Go to Previous Page Button */}
      {previousPageURL && (
        <button
          className="mx-1 bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
          onClick={gotoPreviousPage}
        >
          &lt;
        </button>
      )}
      {/* Go to first page button */}
      {activePageNumber > 5 && (
        <button
          className="mx-1 bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
          onClick={() => {
            setActivePageNumber(0);
            gotoPageNumber(
              `https://pokeapi.co/api/v2/${dataItem}/?offset=${
                activePageNumber * 20
              }&limit=20}`
            );
          }}
        >
          &lt;&lt;
        </button>
      )}
      {/* Page number list */}
      {pageNumbers.map((number: number, index: number) => {
        return activePageNumber > index - sideLength - 1 &&
          activePageNumber < index + sideLength + 1 ? (
          <button
            key={index}
            onClick={() => {
              gotoPageNumber(
                `https://pokeapi.co/api/v2/${dataItem}/?offset=${
                  number * 20
                }&limit=20}`
              );
              setActivePageNumber(number);
            }}
            className={
              activePageNumber === number
                ? "mx-1 bg-white text-black size-10 font-bold text-2xl pb-1 rounded-md hover:bg-black hover:text-white hover:border-white hover:border-2"
                : "mx-1 bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
            }
          >
            {number + 1}
          </button>
        ) : (
          <span key={index} className="text-white font-bold">
            .
          </span>
        );
      })}
      {/* Go to last page button */}
      {activePageNumber < itemCount - 1 && (
        <button
          className="mx-1 bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
          onClick={() => {
            setActivePageNumber(pageNumbers.length - 1);
            gotoPageNumber(
              `https://pokeapi.co/api/v2/${dataItem}/?offset=${
                activePageNumber * 20
              }&limit=20}`
            );
          }}
        >
          &gt;&gt;
        </button>
      )}
      {/* Go to Next Page Button */}
      {nextPageURL && (
        <button
          className="mx-1 bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
          onClick={gotoNextPage}
        >
          &gt;
        </button>
      )}
    </>
  );
}
