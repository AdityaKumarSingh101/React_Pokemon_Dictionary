type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const BackToHomePageButton = ({ text, onClick }: ButtonProps) => {
  switch (text) {
    case "Home":
      return (
        <button
          onClick={onClick}
          className="bg-black flex flex-row gap-2 items-center text-white border-white border-4 hover:bg-white hover:text-black w-25 h-15 rounded-md mt-7 ml-7 p-3 font-bold"
        >
          <span className="text-2xl font-mono">&lt;</span> {text}
        </button>
      );
  }
};

export const BackToPokemonListButton = ({ text, onClick }: ButtonProps) => {
  switch (text) {
    case "Back":
      return (
        <button
          className={
            "bg-black text-white border-white border-2 rounded-md px-4 py-2 font-bold hover:bg-white hover:text-black"
          }
          onClick={onClick}
        >
          <span className="text-xl font-mono">&lt;</span> {text}
        </button>
      );
  }
};
export const BackToItemListButton = ({ text, onClick }: ButtonProps) => {
  switch (text) {
    case "Back":
      return (
        <button
          className={
            "bg-black text-white border-white border-2 rounded-md px-4 py-2 font-bold hover:bg-white hover:text-black"
          }
          onClick={onClick}
        >
          <span className="text-xl font-mono">&lt;</span> {text}
        </button>
      );
  }
};
