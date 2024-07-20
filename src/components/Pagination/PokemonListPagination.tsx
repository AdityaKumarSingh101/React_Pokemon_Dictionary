import { useState } from "react";

type PokemonListPaginationProps = {
  itemCount: number;
  itemsPerPage: number;
  gotoNextPage: () => void;
  gotoPageNumber: (url: string) => void;
  gotoPreviousPage: () => void;
  previousPageURL: string;
  nextPageURL: string;
};
export default function PokemonListPagination({
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

  return (
    <>
      {previousPageURL && (
        <button
          className="bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
          onClick={gotoPreviousPage}
        >
          &lt;
        </button>
      )}
      {pageNumbers.map((number) => {
        return (
          <button
            onClick={() => {
              gotoPageNumber(
                `https://pokeapi.co/api/v2/pokemon/?offset=${
                  number * 20
                }&limit=20}`
              );
              setActivePageNumber(number);
            }}
            className={
              activePageNumber === number
                ? "bg-white text-black size-10 font-bold text-2xl pb-1 rounded-md hover:bg-black hover:text-white hover:border-white hover:border-2"
                : "bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
            }
          >
            {number + 1}
          </button>
        );
      })}
      {nextPageURL && (
        <button
          className="bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
          onClick={gotoNextPage}
        >
          &gt;
        </button>
      )}
    </>
  );
}
