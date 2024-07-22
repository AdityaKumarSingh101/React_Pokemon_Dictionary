import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import PokemonListPage from "./components/Pokemon/PokemonListPage/PokemonsListPage";
import PokemonDetailsPage from "./components/Pokemon/PokemonDetailsPage/PokemonDetailsPage";
import ItemsListPage from "./components/Items/ItemsListPage/ItemsListPage";
import ItemDetailsPage from "./components/Items/ItemDetailsPage/ItemDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon" element={<PokemonListPage />} />
          <Route
            path="/pokemon/:pokemonName"
            element={<PokemonDetailsPage />}
          />
          <Route path="/item" element={<ItemsListPage />} />
          <Route path="/item/:itemName" element={<ItemDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
