type PaginationProps = {
  gotoNextPage: () => void;
  gotoPrevPage: () => void;
  prevPage?: string | null;
  nextPage?: string | null;
};

export const Pagination = ({
  gotoNextPage,
  gotoPrevPage,
  prevPage,
  nextPage,
}: PaginationProps) => {
  return (
    <>
      {prevPage && (
        <button
          onClick={gotoPrevPage}
          className="bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
        >
          &lt;
        </button>
      )}

      {nextPage && (
        <button
          onClick={gotoNextPage}
          className="bg-black text-white size-10 font-bold text-2xl pb-1 rounded-md hover:bg-white hover:text-black"
        >
          &gt;
        </button>
      )}
    </>
  );
};
