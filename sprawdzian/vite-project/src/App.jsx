import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import CatalogPage from "./page/Catalog";
import SingleFlowerPage from "./page/";
import AddFlowerPage from "./page/Add";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CatalogPage />}></Route>
          <Route path="/:id" element={<Single></Single>}></Route>
          <Route path="/dodaj" element={<Add></Add>}></Route>
          
        </Route>
      </Routes>
    </>
  );
}
