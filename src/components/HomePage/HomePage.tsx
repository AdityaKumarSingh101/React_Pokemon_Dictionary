import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-9xl font-bold text-white text-center mt-5 font-chakra bg-black p-10 rounded-3xl">
          Poke <br />
          Library
        </h1>
        <div className="mt-10 h-52 w-full flex flex-row justify-evenly">
          <button
            className="w-[40%] bg-white text-black border-black border-4 hover:bg-black hover:text-white w-25 h-15 rounded-md mt-7 ml-7 p-3 font-bold hover:border-white hover:scale-110 duration-500 ease-in-out"
            onClick={() => navigate("/pokemon")}
          >
            <span className="font-bold text-5xl font-chakra">Pokemon</span>
          </button>

          <button
            className="w-[40%] bg-white text-black border-black border-4 hover:bg-black hover:text-white w-25 h-15 rounded-md mt-7 ml-7 p-3 font-bold hover:border-white hover:scale-110 duration-500 ease-in-out"
            onClick={() => navigate("/item")}
          >
            <span className="font-bold text-5xl font-chakra">Items</span>
          </button>
        </div>
      </div>
    </>
  );
}
