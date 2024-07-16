export const type_style = (element: string) => {
  let bg;
  const text = "text-white";

  switch (element) {
    case "normal":
      bg = "bg-type-normal";
      break;
    case "fire":
      bg = "bg-type-fire";
      break;
    case "water":
      bg = "bg-type-water";
      break;
    case "electric":
      bg = "bg-type-electric";
      break;
    case "grass":
      bg = "bg-type-grass";
      break;
    case "ice":
      bg = "bg-type-ice";
      break;
    case "fighting":
      bg = "bg-type-fighting";
      break;
    case "poison":
      bg = "bg-type-poison";
      break;
    case "ground":
      bg = "bg-type-ground";
      break;
    case "flying":
      bg = "bg-type-flying";
      break;
    case "psychic":
      bg = "bg-type-psychic";
      break;
    case "bug":
      bg = "bg-type-bug";
      break;
    case "rock":
      bg = "bg-type-rock";
      break;
    case "ghost":
      bg = "bg-type-ghost";
      break;
    case "dragon":
      bg = "bg-type-dragon";
      break;
    case "dark":
      bg = "bg-type-dark";
      break;
    case "steel":
      bg = "bg-type-steel";
      break;
    case "fairy":
      bg = "bg-type-fairy";
      break;
    default:
      bg = "bg-white";
      break;
  }
  const style = `${text} ${bg} rounded-md px-1`;
  return style;
};

export const PokemonDetailsCardStyle =
  "m-auto border-black bg-black text-white rounded-md p-5 transition-all hover:scale-125 hover:cursor-default duration-5000 ease-in-out";
