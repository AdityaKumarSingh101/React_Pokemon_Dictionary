import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl text-white mt-5">Poke World!</h1>
        <div className="">
          <button
            className="bg-white text-black border-black border-2 hover:bg-black hover:text-white w-25 h-15 rounded-md mt-7 ml-7 p-3 font-bold"
            onClick={() => navigate("/pokemon")}
          >
            Pokemon
          </button>
        </div>
      </div>
    </>
  );
}
