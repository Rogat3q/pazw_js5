import VegetableCard from "../components/VegetableCard";
import { useVegetables } from "../hooks/useVegetables";
import { deleteVegetables } from "../service/vegetables";
import { useState } from "react";

export default function CatalogPage() {
  const { vegetables, setVegetables, isLoading, error } = useVegetables();
  const [search, setSearch] = useState("");

  if (isLoading) {
    return (
      <>
        <div className="alert alert-warning m-4">Wczytywanie danych...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="alert alert-danger m-4">Błąd wczytywania danych</div>
      </>
    );
  }
  console.log(vegetables);
  const filteredVegetables = vegetables.filter((vegetable) =>
    vegetable.nazwa.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="mb-2">Liczba kwiatów: {vegetables.length}</h1>
      <form className="p-1" role="search">
        <input
          name="search"
          className="form-control"
          type="search"
          placeholder="Szukaj po nazwie"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <div className="container">
        <div id="kwiaty" className="row g-4">
          {filteredVegetables.map((vegetable, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <VegetableCard
                vegetable={vegetable}
                onDelete={(id) => setVegetables(deleteVegetables(id))}
              ></VegetableCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
