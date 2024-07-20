import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import PokemonListPage from "./components/Pokemon/PokemonListPage/PokemonsListPage";
import { PokemonPage } from "./components/Pokemon/PokemonDetailsPage/PokemonDetailsPage";
import ItemsListPage from "./components/Items/ItemsListPage/ItemsListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon" element={<PokemonListPage />} />
          <Route path="/pokemon/:pokemonName" element={<PokemonPage />} />
          <Route path="/item" element={<ItemsListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
