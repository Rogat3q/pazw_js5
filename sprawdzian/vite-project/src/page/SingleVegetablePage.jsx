import { useVegetables} from "../hooks/useVegetables";
import { useParams, useNavigate } from "react-router-dom";

export default function SingleVegetablePage() {
  const { vegetables, isLoading, error } = useVegetables();
  const { id } = useParams();
  const navigate = useNavigate();

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

  const vegetable = vegetables.find((vegetable) => vegetable.id == id);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <div className="card" style={{ width: 20 + "rem" }}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title">{vegetable.tytul}</h4>
              {vegetable.dostepny ? (
                <span className="badge text-bg-success">Numer</span>
              ) : (
                <span className="badge text-bg-secondary">Klasa</span>
              )}
            </div>
            <div className="card-subtitle mb-2">Cena: {id}</div>
            <div className="card-text d-flex justify-content-between m-2">
              <span>Grupa:</span>
              <span>
                <b>{vegetable.klasa}</b>
              </span>
            </div>
            <div className="card-text d-flex justify-content-between m-2">
              <span>Nowość:</span>
              <span>
                <b>{vegetable.nowosc}</b>
              </span>
            </div>

            <div className="d-flex mt-2 border-top w-100">
              <button
                className="btn btn-outline-primary mt-2 w-100"
                onClick={() => navigate(-1)}
              >
                ← Wróć do katalogu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

