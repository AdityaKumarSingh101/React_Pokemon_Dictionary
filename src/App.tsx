import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import PokemonListPage from "./components/PokemonListPage/PokemonListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon" element={<PokemonListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
